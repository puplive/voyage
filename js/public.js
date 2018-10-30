
$(function(){

	// 导航
	$('#nav_tab_btn').on('click',function(){
		$('#header').toggleClass('toggle');
	});

	$('#nav_box').on('click',function(){
		$('#header').removeClass('toggle');
	});

	// 下拉 框
	$('.c_select_btn').on('click', function(event) {
		$(this).parent('.c_select').toggleClass('on');
	});
	$('.c_select_list').on('click','.c_select_item', function(event) {
		var $this = $(this);
		$this.addClass('active').siblings('.c_select_item').removeClass('active')
		$this.parent('.c_select_list').prev('.c_select_btn').text($this.text()).parent('.c_select').removeClass('on');
	});

	// 回到顶部
	$("#go_top").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 	});

 	$(window).scroll(function(event) {

 		if ($(window).scrollTop() >500){
 			$('#go_top_box').show();
 		}else{
 			$('#go_top_box').hide();
 		}
 	});

 	// var banner_n = 0;
 	// banner
 	var $banner_list = $('.banner_item');
 	$('#banner_nav ').on('click','.banner_nav_item', function(event) {
 		var $this = $(this),
 			n = $this.index();
 		$banner_list.eq(n).animate({opacity: 1},800).siblings('.banner_item').animate({opacity: 0},800);

 	});

 	// img
 	// var img_w = $('.j_img').eq(0).width();

 	// $('.j_img').height(img_w*272/407);
 	img_box('j_img',407,272);
 	img_box('j_img-2',370,246);

 	$('.j_img').hover(function() {
 		var $this = $(this);
 		$this.css({
 			width: $this.width()+30,
 			height: $this.height()+30,
 			margin: -15
 		});
 	}, function() {
 		var $this = $(this);
 		$this.css({
 			width: $this.width()-30,
 			height: $this.height()-30,
 			margin: 0
 		});
 	});

 	// 
 	function img_box(cl,w,h){
 		if($('.'+cl)){
	 		var img_w = $('.'+cl).eq(0).width();
	 		console.log(img_w);
	 		$('.'+cl).height(img_w*h/w)
 		}
 	}

})