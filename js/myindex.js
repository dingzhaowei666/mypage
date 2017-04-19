$(function(){
	$('.section-toggle').on('click', function(){
		var $this = $(this),
			sect = $( '#' + $this.data('section') ),//给当前点击的menu存一个id“section”
			current_sect = $('.section.active');//当前屏
		if(sect.length == 1){//如果点击了menu
			if( sect.hasClass('active') == false && $('body').hasClass('section-switching') == false ){//当点击不为空且body无遮罩
				$('body').addClass('section-switching');
				if( sect.index() < current_sect.index() ){//mune的索引位置大于当前页的索引位置
					$('body').addClass('up');
				}else{
					$('body').addClass('down');
				}
				setTimeout(function(){//2.5秒移除类
					$('body').removeClass('section-switching up down');
				}, 2500);
				setTimeout(function(){//1.25秒将active从上移到当前页面
					current_sect.removeClass('active');
					sect.addClass('active');
				}, 1250);
				
			}
		}
	});

})
