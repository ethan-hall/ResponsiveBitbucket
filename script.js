chrome.browserAction.onClicked.addListener(function(tab) {
    //console.log('Resizing ' + tab.url);
    chrome.tabs.executeScript({
        code: 'document.getElementById("content").style.width="900px"'
    });
});
