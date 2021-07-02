class UsersEndpoint {
  constructor(parent) {
    this.parent = parent;
    this.path = "users";
  }
  list() {
    return this.parent.request(this.path, "get", null);
  }
  retrieve(userId) {
    return this.parent.request(`${this.path}/${userId}`, "get", null);
  }
}

class SearchEndpoint {
  constructor(parent) {
    function call(params = null) {
      return parent.request("search", "post", params);
    }
    return call;
  }
}

class PagesEndpoint {
  constructor(parent) {
    this.parent = parent;
    this.path = "pages";
  }
  create(params) {
    return this.parent.request(this.path, "post", params);
  }
  retrieve(pageId) {
    return this.parent.request(`${this.path}/${pageId}`, "get");
  }
  update(pageId, params) {
    return this.parent.request(`${this.path}/${pageId}`, "patch", params);
  }
}

class DatabasesEndpoint {
  constructor(parent) {
    this.parent = parent;
    this.path = "databases";
  }
  list() {
    return this.parent.request(this.path, "get", null);
  }
  query(databaseId, params) {
    this.parent.request(`${this.path}/${databaseId}`, "post", params);
  }
  retrieve(databaseId) {
    return this.parent.request(`${this.path}/${databaseId}`, "get", null);
  }
}

class BlocksChildrenEndpoint {
  constructor(parent) {
    this.parent = parent;
    this.base_url = parent.base_url;
    this.path = "blocks";
    this.child = "children";
  }
  append(blockId, params) {
    return this.parent.request(
      `${this.path}/${blockId}/${this.child}`,
      "patch",
      params
    );
  }
  list(blockId) {
    return this.parent.request(
      `${this.path}/${blockId}/${this.child}`,
      "get",
      null
    );
  }
}

class BlocksEndpoint {
  constructor(parent) {
    this.request = parent.request;
    this.children = new BlocksChildrenEndpoint(parent);
  }
}
