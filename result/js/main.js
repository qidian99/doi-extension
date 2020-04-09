
(function ($) {
	"use strict";
	$('.column100').on('mouseover',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).addClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
	});

	$('.column100').on('mouseout',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).removeClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
	});
  
  chrome.storage.sync.get('result', function(data) {
    console.log("Getting data from result page", data);
    const {
      title,
      doi,
      pmid,
      uri,
      journal,
      abstract,
      authors,
      cited_by_posts_count: citation,
    } = JSON.parse(data.result);
    $('#title').text(title);
    $('#doi').text(doi);
    $('#pmid').text(pmid);
    $('#uri').text(uri);
    $('#journal').text(journal);
    $('#abstract').text(abstract);
    $('#authors').text(JSON.stringify(authors));
    $('#citation').text(citation);

    
    $('.cell100.column1').each((i, el) => {
      console.log($(el).height(), 'and', $('.cell100.column2').eq(i).height());
      $(el).height($('.cell100.column2').eq(i).height());
    });
  });


})(jQuery);