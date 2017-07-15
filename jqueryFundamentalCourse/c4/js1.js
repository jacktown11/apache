$(document).ready(function(){
	/*var $speech = $('div.speech'),
		defaultFontSize = parseFloat($speech.css('fontSize'));
		//页面载入时，speech部分初始字体大小
	//点击字体大小切换按钮时，对于调整speech部分字体大小
	$('#switcher button').click(function(){
		var fontSize = parseFloat($speech.css('fontSize'));
		switch(this.id){
			case 'switcher-large':
				fontSize *= 1.4;
				break;
			case 'switcher-small':
				fontSize /= 1.4;
				break;
			case 'switcher-default':
				fontSize = defaultFontSize;
				break;
		}
		// $speech.css('fontSize',fontSize + 'px');
		$speech.animate({'font-size':fontSize+'px'},'slow');
	});
*/

/*
	//初始状态下隐藏第二个段落
	var $p2 = $('p').eq(1);
	$p2.hide();
	//点击more按钮时，逐渐显示第二个段落，隐藏链接
	$('a.more').click(function(event){
		event.preventDefault();
		// $p2.hide();	//瞬时显示
		// $p2.hide('slow');	//渐变出现(大小和透明度)
		// $p2.fadeIn('slow');	//淡入(透明度)
		// $p2.slideDown('slow');	//滑入(滑入)
		$p2.slideToggle('slow');	//以高度变化方式切换段落显隐
		$link = $('a.more');
		if($link.text() === "read more"){
			$link.text('read less');
		}else{
			$link.text('read more');
		}
	});
*/

	//点击"Text Size"标题时，switcher框动画移动效果
	var paraWidth = $('.speech p').outerWidth(),	//在css将body设置为display:none;时可能会出问题
		switcherWidth = $('#switcher').outerWidth();
	$('.label').click(function(){
/*		//同时执行
		$('#switcher').css({
			position: 'relative'
		}).animate({
			borderWidth: '5px',
			left: paraWidth - switcherWidth,
			height: '+=100px'
		},'slow');
*/

/*		//队列执行
		$('#switcher').css({position: 'relative'})
		.animate({borderWidth: '5px'},'slow')
		.fadeTo('fast',0.5)
		.animate({left: paraWidth - switcherWidth},'slow')
		.fadeTo('slow',1)
		.animate({height: '+=100px'},'slow');
*/	

/*		//越过队列
		//queue标记为false时，该动画在代码运行到该行时立即开始
		$('#switcher').css({position: 'relative'})
		.animate({borderWidth: '5px'},'slow')
		.fadeTo('fast',0.5)
		.animate({left: paraWidth - switcherWidth},{
			duration:'slow',
			queue:false
		})
		.fadeTo('slow',1)
		.animate({height: '+=100px'},'slow');
*/
/*
		//向队列中添加非效果方法
		$('#switcher').css({position: 'relative'})
		.fadeTo('fast',0.3)		
		.animate({borderWidth: '5px'},'slow')
		.animate({left: paraWidth - switcherWidth},{
			duration:'slow',
			queue:false
		})
		.fadeTo('slow',1)
		.animate({height: '100px'},'slow')
		.queue(function(next){
			$(this).css({backgroundColor: '#ff0000'});
			next();
		});
		.animate({height: '40px'},'slow');
*/
		// //利用回调函数向队列中添加非效果方法
		// $('#switcher').css({position: 'relative'})
		// .fadeTo('fast',0.3)		
		// .animate({borderWidth: '5px'},'slow')
		// .animate({left: paraWidth - switcherWidth},{
		// 	duration:'slow',
		// 	queue:false
		// })
		// .fadeTo('slow',1)
		// .animate({height: '100px'},'slow',function(){
		// 	$(this).css({backgroundColor: '#ff0000'});
		// })
		// .animate({height: '40px'},'slow');	
	});


	//利用回调函数处理多组元素动画队列
	// $('p').eq(2).css({border: '1px solid #333'})
	// .click(function(){
	// 	var $clickedItem = $(this);
	// 	$(this).next().slideDown(3000,function(){
	// 		$clickedItem.slideUp(3000);
	// 	});
	// });
	// $('p').eq(3).css({backgroundColor: '#ccc'}).hide();


	// //practice
	// (function(){
	// 	$('body').fadeIn(1000);
	// 	$('p').hover(function(){
	// 		$(this).css({backgroundColor: 'yellow'});
	// 	});
	// 	$('h2').click(function(){
	// 		var mgLeft = parseFloat($(this).css('marginLeft')) + 20;
	// 		$(this)
	// 		.animate({opacity: '0.25',marginLeft: mgLeft},'slow')
	// 		.animate({opacity: '0.5'},'slow');
	// 	});
	// 	$(document).keyup(function(event){
	// 		var $witcher = $('#switcher');
	// 		$witcher.css({position: 'relative'});
	// 		var leftPos = parseFloat($witcher.css('left')),
	// 			topPos = parseFloat($witcher.css('top'));
	// 		switch(event.keyCode){
	// 			case 37:
	// 				$witcher.animate({left: leftPos-20},'slow');
	// 				break;
	// 			case 38:
	// 				$witcher.animate({top: topPos-20},'slow');
	// 				break;
	// 			case 39:
	// 				$witcher.animate({left: leftPos + 20},'slow');
	// 				break;
	// 			case 40:
	// 				$witcher.animate({top: topPos + 20}, 'slow');
	// 				break;
	// 			default:
	// 				console.log('wrong keyCode');
	// 				break;
	// 		}
	// 	});
	// })();
});
