$(document).ready(function(){
	$('#selected-plays > li').addClass('horizontal');
	$('#selected-plays li:not(.horizontal)').addClass('sub-level');
	$('a[href^="mailto:"]').addClass('mailto');
	$('a[href$=".pdf"]').addClass('pdflink');
	$('a[href^="http"][href*="henry"]').addClass('henrylink');
	$('tr:even').addClass('alt');
	$('tr.alt').removeClass('alt');
	$('tr:nth-child(odd)').addClass('alt');
	$('td:contains("Henry")').parent().children().addClass('highlight');
	$('a').filter(function(){
		return this.hostname && this.hostname !== location.hostname;
	}).addClass('external');
	$('#selected-plays>li>ul>li').addClass('special');
	$('td:nth-of-type(3)').addClass('year');
	$('table:contains("Tragedy") tr').filter(':first-child').addClass('special');	
	$('li a').parent().siblings().filter(function(){
		return $(this).find('a').length === 0;
	}).addClass('afterlink');
	$('a[href$=".pdf"]').parents().filter(function(){
		return $(this).find('ul').length === 0;
	}).addClass('tragedy');
	console.log($('table').find('tr').filter(':eq(8)'));
});