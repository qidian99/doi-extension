
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log('Runtime receives new request.', message);
  if (message.method === "getSelection") {
    console.log('Getting selection:', window.getSelection().toString())
    sendResponse({data: window.getSelection().toString()});
  }
  else
    sendResponse({}); // snub them.
});
