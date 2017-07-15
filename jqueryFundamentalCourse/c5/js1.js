$(document).ready(function(){
	$('.chapter a[href*="wikipedia"]').attr({
		rel: 'external',
		title: function(){
			return 'learn more about ' + $(this).text() + ' at wikipedia.';
		}, 
		id: function(index,oldValue){
			return 'wikiLink-' + index;
		}
	});
});
