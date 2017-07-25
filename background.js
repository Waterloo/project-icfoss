    browser.contextMenus.create({
        id: "log-selection",
        title: "Malayalam Wordnet",
        contexts: ["selection"]
    });
    var json;
    browser.contextMenus.onClicked.addListener(function (info, tab) {
        if (info.menuItemId == "log-selection") {
            var selectedText = info.selectionText;
            browser.storage.local.get({
                    // "language": "en",
                    "tabBehaviour": "new",
                    "tabActive": "yes"
                },
                function (item) {


                    chrome.tabs.executeScript({
                        code: "window.getSelection().toString();"
                    }, function (selection) {
                        chrome.tabs.executeScript({
                            file: "/popup.js"
                        }, function () {
                            console.log('inner callback')
                        })
                    });







                });
        };






    });