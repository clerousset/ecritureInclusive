// background.js

// Called when the user clicks on the browser action.
browser.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    browser.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});