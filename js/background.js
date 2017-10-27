
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
            if(items.stop1 !== 'undefined') {matchAndClose(regExpEscape(items.stop1), changeInfo.url, tabId);}
            if(items.stop2 !== '') {matchAndClose(regExpEscape(items.stop2), changeInfo.url, tabId);}
            matchAndClose(regExpEscape(items.stop3), changeInfo.url, tabId);
            matchAndClose(regExpEscape(items.stop4), changeInfo.url, tabId);
            matchAndClose(regExpEscape(items.stop5), changeInfo.url, tabId);
            matchAndClose(regExpEscape(items.stop6), changeInfo.url, tabId);
            matchAndClose(regExpEscape(items.stop7), changeInfo.url, tabId);
       });
    }
});
