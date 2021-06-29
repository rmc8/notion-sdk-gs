function setNotionToken(val) {
    PropertiesService.getScriptProperties().setProperty("NOTION_TOKEN", val);
}

function isNullOrUndefined(val){
    return (val === undefined || val === null);
}

