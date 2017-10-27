
function regExpEscape(stopItem) {
    return stopItem.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
}

function matchAndClose(stopItem, url, tabId) {
        if((stopItem.length > 3)&&(/ /.test(stopItem)) == false) {
            
            var re = new RegExp(stopItem, 'i');
            if( re.test(url) ) {
                chrome.tabs.remove(tabId);
                alert(url + " was blocked");
            }
        }
}


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if(typeof(changeInfo.url) !== 'undefined') {
        
        chrome.storage.sync.get(null, function(items) {
            changeInfo.url = changeInfo.url.match(/(http(s)?:\/\/)?.+?\//);
//            alert(changeInfo.url[0]);
            matchAndClose(regExpEscape(items.stop1), changeInfo.url[0], tabId);
            matchAndClose(regExpEscape(items.stop2), changeInfo.url[0], tabId);
            matchAndClose(regExpEscape(items.stop3), changeInfo.url[0], tabId);
            matchAndClose(regExpEscape(items.stop4), changeInfo.url[0], tabId);
            matchAndClose(regExpEscape(items.stop5), changeInfo.url[0], tabId);
            matchAndClose(regExpEscape(items.stop6), changeInfo.url[0], tabId);
            matchAndClose(regExpEscape(items.stop7), changeInfo.url[0], tabId);
       });
    }
});
