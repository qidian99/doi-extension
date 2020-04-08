 $('#searchButton').on('click', async function(e) {
   e.preventDefault();

  //  alert($('#doi').val());
  //  console.log($('#doi').val())

  try {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const res = await fetch(`https://api.altmetric.com/v1/doi/${$('#doi').val()}`, requestOptions)
    const data = await res.json();

    const val = $('#doi').val();
    
    chrome.storage.sync.set({result: JSON.stringify(data)}, function() {
      console.log('Result stored' +  JSON.stringify(data));
      chrome.runtime.sendMessage({'result': val});
    })
    
  } catch(error) {
    console.log('error', error);
  }
  
  

 });