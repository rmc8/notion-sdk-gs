class Client {
  constructor(auth, url = "https://api.notion.com/v1") {
    this.base_url = url;
    this.users = new UsersEndpoint(this);
    this.search = new SearchEndpoint(this);
    this.pages = new PagesEndpoint(this);
    this.databases = new DatabasesEndpoint(this);
    this.blocks = new BlocksEndpoint(this);
    this.header = {
      Authorization: `Bearer ${auth}`,
      "Notion-Version": "2021-05-13",
    };
  }
  request(path, method, params) {
    var url = `${this.base_url}/${path}`;
    var options = {
      method: method,
      headers: this.header,
      muteHttpExceptions: true,
    };
    if (!isNullOrUndefined(params)) {
      options["payload"] = JSON.stringify(params);
    }
    console.log(url);
    console.log(options);
    var res = UrlFetchApp.fetch(url, options);
    if (res.getResponseCode() == 200) {
      return JSON.parse(res.getContentText());
    }
  }
}

function main() {
  var props = PropertiesService.getScriptProperties();
  const notion = new Client(props.getProperty("NOTION_TOKEN"));
  var ret = notion.search({ query: "My" });
  console.log(ret);
}
