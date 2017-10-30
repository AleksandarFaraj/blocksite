
//function regExpEscape(string) {
//    return string.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
//}

function removeWhiteSpace(pattern) {
    return pattern.replace(/\s/g, '');
}    

function matchAndClose(pattern, url, tabId) {
        if((pattern.length > 4)&&(/ /.test(pattern)) == false) {
            
            var re = new RegExp(pattern, 'i');
            if( re.test(url) ) {
                chrome.tabs.remove(tabId);
//                alert(url + " was blocked");
            }
        }
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

    if(typeof(changeInfo.url) !== 'undefined') {
        chrome.storage.sync.get(null, function(items) {
            if(typeof(items.pattern) !== 'undefined') {
                changeInfo.url = changeInfo.url.match(/(?:http(s)?:\/\/)?.+?\//);
//              alert(changeInfo.url[0]);
                matchAndClose(removeWhiteSpace(items.pattern), changeInfo.url[0], tabId);
            }
       });
    }
});
