    browser.contextMenus.create({
        id: "log-selection",
        title: "Malayalam Wordnet",
        contexts: ["selection"]
    });
    var json;
    browser.contextMenus.onClicked.addListener(function(info, tab) {
        if (info.menuItemId == "log-selection") {
            var selectedText = info.selectionText;
            browser.storage.local.get({
                   // "language": "en",
                    "tabBehaviour": "new",
                    "tabActive": "yes"
                },
                function(item) {
                    //var json;
                    //var language = item.language;
                    var tabBehaviour = item.tabBehaviour;
                    var tabActive = item.tabActive;
                   // var url1 = "http://www.cfilt.iitb.ac.in/indowordnet/first?langno=9&queryword=" + selectedText + "+";
                    var url = "https://malayalam-wordnet.herokuapp.com/wordnet?q=" + selectedText + "+";

                   /* var ifrm = document.createElement("iframe");
                    ifrm.setAttribute("src", "http://google.com/");
                    ifrm.style.width = "640px";
                    ifrm.style.height = "480px";
                    document.body.appendChild(ifrm);
*/
                    var xmlHttp = new XMLHttpRequest();
                    xmlHttp.onreadystatechange = function() { 
                     console.log(xmlHttp.status);
                                        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    {
                        console.log(xmlHttp.responseText);
                        var dicString=xmlHttp.responseText;
                        console.log(dicString);
                        console.log(document);

                        //var fs = require('fs');
                        //fs.writeFile("thing.json", dicString);
                        
                        //json = JSON.parse(xmlHttp.responseText);
                        //console.log(json.synonyms);
                        //console.log(json.glossenglish);
                        //var item1=json.synonyms;
                        //var item2=json.glossenglish;
                        //var item3=json.example_statement;
                        //var item3=json.gloss;
                        //document.getElementById("item1").innerHTML = JSON.stringify(item1, undefined, 2);

                                         }}
                    xmlHttp.open("GET", url, true); // true for asynchronous 
                    xmlHttp.send(null);

                    

                    

                    /*var url = "http://www.cfilt.iitb.ac.in/indowordnet/first?langno=9&queryword=" + encodeURIComponent(selectedText) + "+";*/
                /*
                    if (tabBehaviour == "new") {
                        if (tabActive == "no") {
                            chrome.tabs.create({
                                url: url,
                                active: false
                            });
                        } else {
                            chrome.tabs.create({
                                url: url
                            });
                        }
                    } else {
                        chrome.tabs.update({
                            url: url
                        });
                    }*/


                });
        };


               



    });