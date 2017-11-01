    
function matchAndClose(pattern, url, tabId) {

        var re = new RegExp(pattern, 'i');
        if( re.test(url) ) {
//            alert(re);
            chrome.tabs.remove(tabId);
        }
};

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

    if( (typeof(changeInfo.url) !== 'undefined') && (! /(chrome:\/\/)/.test(changeInfo.url )) ) {
//        alert(changeInfo.url);
        
        chrome.storage.sync.get(null, function(items) {

            if( (typeof(items.pattern) !== 'undefined') && (items.pattern !== null) ) {
//                alert(items.pattern);
                changeInfo.url = changeInfo.url.match(/(?:http(s)?:\/\/)?.+?\//);
                matchAndClose(items.pattern, changeInfo.url[0], tabId);
            }
       });
    }
});
