
function preparePattern(pattern) {
    
    //Remove WhiteSpace and newlines. Remove trailing Vertical Line(s)
     return pattern.replace(/\s/g, '').replace(/\|+$/m, '');
    
}
    
function matchAndClose(pattern, url, tabId) {
    if(pattern.length > 4) {

        var re = new RegExp(pattern, 'i');
        if( re.test(url) ) {
            chrome.tabs.remove(tabId);
        }
    }
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

    if(typeof(changeInfo.url) !== 'undefined') {
        
        chrome.storage.sync.get(null, function(items) {

            if(typeof(items.pattern) !== 'undefined') {
                
                changeInfo.url = changeInfo.url.match(/(?:http(s)?:\/\/)?.+?\//);
                matchAndClose(preparePattern(items.pattern), changeInfo.url[0], tabId);
            }
       });
    }
});
