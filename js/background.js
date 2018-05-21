
function matchAndClose(pattern, url, tabId) {

    var re = new RegExp(pattern, 'i');
    if (re.test(url)) {
        //            alert(re);
        
        updateProperties = new Object();
        updateProperties.url = 'https://aleksandarfaraj.github.io/blocksite/';
        chrome.tabs.update(tabId, updateProperties, function () {
            // Anything else you want to do after the tab has been updated.
        });
    }
};

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if ((typeof (changeInfo.url) !== 'undefined') && (! /(chrome:\/\/)/.test(changeInfo.url))) {
        //        alert(changeInfo.url);

        chrome.storage.sync.get(null, function (items) {

            if ((typeof (items.pattern) !== 'undefined') && (items.pattern !== null) && (items.disable == false)) {
                //                alert(items.pattern);
                changeInfo.url = changeInfo.url.match(/(?:http(s)?:\/\/)?.+?\//);
                matchAndClose(items.pattern, changeInfo.url[0], tabId);
            }
        });
    }
});
