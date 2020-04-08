chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: "<all_urls>",},
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.runtime.onMessage.addListener((message, sender) => { 
  chrome.tabs.create({url: 'result.html'}, (tab) => {
    console.log("Received message:", message, tab);
    // tab.executeScript({code: `$('#result').text(${message.result})`});
  })
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   // make sure the status is 'complete' and it's the right tab
   if (tab.url.indexOf('127.0.0.1:8000') != -1 && changeInfo.status == 'complete') {
    chrome.tabs.executeScript(null, { 
        code: "alert('hi');" 
    });
  }
});