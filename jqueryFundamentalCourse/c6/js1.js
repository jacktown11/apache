$(document).ready(function(){

	//用ajax请求html文档片段，加载到页面中
	$('#letter-a a').click(function(event){
		event.preventDefault();
		$('#dictionary').load('a.html');
		// alert('Loaded!');
	});

	//请求json数据以修改页面
	$('#letter-b a').click(function(event){
		event.preventDefault();
		$.getJSON('b.json',function(data){
			var html = '';
			$.each(data,function(entryIndex,entry){
				html += '<div class="entry">';
				html += '<h3 class="term">'+entry.term+'</h3>';
				html += '<div class="part">'+entry.part+'</div>';
				html += '<div class="definition">'+entry.definition;
				if(entry.quote){
					html += '<div class="quote">';
					$.each(entry.quote,function(lineIndex,line){
						html += '<div class="quote-line">' + line + '</div>';
					});
					if(entry.author){
						html += '<div class="quote-author">' + entry.author + '</div>';
					}
					html += '</div>';
				}
				html += '</div>';
				html += '</div>';
			});
			$('#dictionary').html(html);
		});
	});

	//直接加载js文件，js文件中有原始数据和修改dom的代码，从而更新页面
	$('#letter-c a').click(function(event){
		event.preventDefault();
		$.getScript('c.js');
	});

	$('#letter-d a').click(function(event){
		event.preventDefault();
		$.get('d.xml',function(data){
			$('#dictionary').empty();
			var html = '';
			$(data).find('entry').each(function(){
				var $entry = $(this);
				html += '<div class="entry">';
				html += '<div class="term">' + $entry.attr('term') + '</div>';
				html += '<div class="part">' + $entry.attr('part') + '</div>';
				html += '<div class="definition">' + $entry.find('definition').text();
				var $quote = $entry.find('quote');
				if($quote.length > 0){
					html += '<div class="quote">'
					$quote.find('line').each(function(){
						html += '<div class="line">' + $(this).text() + '</div>';
					});
					if(!!$quote.attr('author')){
						html += '<div class="author">' + $quote.attr('author') + '</div>';
					}
					html += '</div>';
				} 
				html += '</div>';
				html += '</div>';
			});	
			$('#dictionary').html(html);
		});
	});

	//想php脚本发起ajax请求
	$('#lettter-e a').click(function(event){
		event.preventDefault();
		var requestData = {term: $(this).text()};
		$.get('e.php',requestData,function(data){
			$('#dictionary').html(data);
		})
	});
});
