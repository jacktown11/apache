$(document).ready(function(){
	// $('switcher-default').addClass('selected');
	// $('#switcher h3').hover(function(){
	// 	$(this).addClass('hover');
	// },function(){
	// 	$(this).removeClass('hover');
	// });

	// $('#switcher').click(function(event){
	// 	if($(event.target).is('button')){
	// 		//doc style button is clicked
	// 		var bodyClass = event.target.id.split('-')[1];
	// 		$('body').removeClass().addClass(bodyClass);
	// 		$('#switcher button').removeClass();
	// 		$(event.target).addClass('selected');
	// 	}else{
	// 		//#switcher outside of button is clicked
	// 		$('#switcher button').toggleClass('hidden');
	// 	}
	// });

	//h3的鼠标移入移出样式切换
	$('#switcher h3').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});

	// 样式切换控制按钮折叠展开切换
	var toggleSwitcher = function(){
		if(!$(event.target).is('button')){
			$('#switcher button').toggleClass('hidden');
		}		
	};
	$('#switcher').click(toggleSwitcher);

	// 初始状态时折叠样式切换控制按钮
	$('#switcher').click();

	// 该函数切换body的class类和各个button的class类以改变样式
	var toggleBodyClass = function(className){
			//改变body的样式类
			$('body').removeClass().addClass(className);

			//改变被点击按钮的样式类
			$('#switcher button').removeClass();
			$('#switcher-' + className).addClass('selected');

			//只在默认样式下可隐藏‘样式切换控制按钮’
			$('#switcher').off('click',toggleSwitcher);
			if(className === 'default'){
				$('#switcher').on('click',toggleSwitcher);
			}
	};

	//初始状态设置为默认状态
	$('#switcher-default').addClass('selected');

	//各按键对应的类名
	var trigers = {
		D: 'default',
		N: 'narrow',
		L: 'large'
	}

	// 样式切换控制按钮点击事件
	$('#switcher').click(function(event){
		if($(event.target).is('button')){
			var className = event.target.id.split('-')[1];
			toggleBodyClass(className);
		}
	});

	// 键盘事件，触发效果等效于相应的样式切换控制按钮被点击
	$(document).keyup(function(event){
		var key = String.fromCharCode(event.keyCode);
		if(key in trigers){
			toggleBodyClass(trigers[key]);		
		}
	});


	//practice
	(function(){
		$('.author').click(function(){
			$(this).toggleClass('selected');
		});
		$('.chapter-title').click(function(){
			$(this).siblings().toggleClass('hidden');
		});
		$(document).keyup(function(event){
			if(event.keyCode === 39){
				if($('body').is('.default')){
					toggleBodyClass('narrow');
				}else if($('body').is('.narrow')){
					toggleBodyClass('large');
				}else{
					toggleBodyClass('default');
				}
			}
		});
		$('p').mousemove(function(event){
			console.log("X: " + event.clientX + ",Y: " + event.clientY);
		});

		var pos = {
			clientX: 0,
			clientY: 0
		};
		$(document).mousedown(function(event){
			pos.clientX = event.clientX;
			pos.clientY = event.clientY;
		});
		$(document).mouseup(function(){
			if(event.clientY > pos.clientY){
				$('p').removeClass('hidden');
			}
			if(event.clientX === pos.clientX && 
				event.clientY === pos.clientY){
				$('p').addClass('hidden');
			}
		});
	})();
});
