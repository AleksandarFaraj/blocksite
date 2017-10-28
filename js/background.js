
//function regExpEscape(stopItem) {
//    return stopItem.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
//}

function matchAndClose(pattern, url, tabId) {
        if((pattern.length > 3)&&(/ /.test(pattern)) == false) {
            
            var re = new RegExp(pattern, 'gi');
            if( re.test(url) ) {
                chrome.tabs.remove(tabId);
//                alert(url + " was blocked");
            }
        }
}


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

    if(typeof(changeInfo.url) !== 'undefined') {
        chrome.storage.sync.get(null, function(items) {
            changeInfo.url = changeInfo.url.match(/(http(s)?:\/\/)?.+?\//);
//            alert(changeInfo.url[0]);
            matchAndClose(items.pattern, changeInfo.url[0], tabId);
       });
    }
});
