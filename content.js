browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      
       var elements = document.getElementsByTagName('*');

            for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

                for (var j = 0; j < element.childNodes.length; j++) {
                    var node = element.childNodes[j];

                    if (node.nodeType === 3) {
                        var text = node.nodeValue;
                        var replacedText = text.replace(/\.e\.s|·e·s/g, "s");
                        var replacedText = replacedText.replace(/\.e\·e/g, "");	
                        if (replacedText !== text) {
                            element.replaceChild(document.createTextNode(replacedText), node);
                        }
                    }
                }
            } 
    }
  }
);

