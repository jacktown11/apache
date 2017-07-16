$(document).ready(function(){

	//add link help info
	// $('.chapter a[href*="wikipedia"]').attr({
	// 	rel: 'external',
	// 	title: function(){
	// 		return 'learn more about ' + $(this).text() + ' at wikipedia.';
	// 	}, 
	// 	id: function(index,oldValue){
	// 		return 'wikiLink-' + index;
	// 	}
	// });

	//link back to the top
	// $('<a href="#top">Back to top</a>').insertAfter('div.chapter p');
	// $('<a id="top"></a>').prependTo('body');



	//arrange foot note

	//method 1: 隐式迭代
	// $('span.footnote')
	// .insertBefore('#footer')
	// .wrapAll('<ol id="note"></ol>')
	// .wrap('<li></li>');

	//method 2: 显式迭代
	var $notes = $('<ol id="notes"></ol>').insertAfter('div.chapter');
	$('span.footnote').each(function(index){
		$(this)
		.before([
			'<a href="#footnote-',
			index + 1,
			'" id="context-',
			index + 1,
			'" class="context"><sup>',
			index + 1,
			'</sup></a>'
			].join(''))
		.appendTo($notes)
		.wrap('<li id="footnote-' + (index+1) +'"></li>')
		.append('(<a href="#context-' + (index+1) +'">context</a>)');
	});

	// 突出显示从段落中引用的文字
	$('.pull-quote').each(function(){
		var $parentPara = $(this).parent('p'),
			$copy = $(this).clone();
		$parentPara.css({position: 'relative'});
		$copy
			.addClass('pulled')
			.find('.drop')
				.html('&hellip;')
			.end()
			.text($copy.text())
			.appendTo($parentPara);
	});

	//practice
	(function(){
		//back to top link modify
		$('<a id="top"></a>').prependTo('body');
		$('.chapter p').each(function(index){
			if(index >= 3){
				$(this).after('<a href="#top" class="backTopLink">back to top</a>');
			}
		});

		//点击back to top链接时在其后生成文本为‘you are here’的段落
		$('.backTopLink').click(function(){
			if($('#oldPosition').length > 0){
				$('#oldPosition').insertAfter(this);
			}else{
				$(this).after('<p id="oldPosition">You are Here</p>');			
			}
		});

		//bold the author's name when clicked
		$('#f-author').click(function(){
			var $parent = $(this).parent();
			if($(this).parent()[0].nodeName.toLowerCase() === 'b'){
				$(this).insertAfter($parent);
				$parent.remove();
			}else{
				$(this).wrap('<b></b>');
			}
		});

		//用addClass之外的方法，为所有段落添加inhabitants类
		$('.chapter p').each(function(){
			var classStr = $(this).attr('class');
			if(!classStr){
				classStr = '';
			}
			if(classStr.indexOf('inhabitants') < 0){
				$(this).attr({class: classStr + ' inhabitants'});
			}
		});
	})();
});
