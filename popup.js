function sha() {

    var selectedText = window.getSelection().toString()
    var url = "https://malayalam-wordnet.herokuapp.com/wordnet?q=" + selectedText + "+";

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        console.log(xmlHttp.status);
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText);
            var dicString = xmlHttp.responseText;
            var dicString = dicString.replace(/\\n/g, "")
            var resp = JSON.parse(dicString);
            alert(resp.pos.trim())
            var popup = window.document.createElement('div');
            popup.setAttribute("style", "position: fixed; left: 0px; top: 0px; background-color: rgb(255, 255, 255); z-index: 2000; height: 200px; width: 100%;box-shadow:1px 1px 1px #f1f1f1;");
            popup.innerHTML = "<h5>" + selectedText + "</h5><h6>" + resp.pos.trim() + "</h6><h6>" + resp.gloss.trim() + "</h6>";
            document.body.append(popup)


        }
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);





}

sha()