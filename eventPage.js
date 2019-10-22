var menuItem ={
    "id": "urband",
    "title": "UrbanD",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "urband" && clickData.selectionText){
        var urbanUrl = "https://www.urbandictionary.com/define.php?term=" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": urbanUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };
        chrome.windows.create(createData, function(){});
    }
})