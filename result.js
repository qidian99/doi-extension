chrome.storage.sync.get('result', function(data) {
  console.log("Getting data from result page", data);
  $('#result').text(JSON.stringify(data));
});

