
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

 	var banner_n = 0;

 	function banner(id,n){

 		// var $ban = $('#')

 	}
 	var $banner_list = $('.banner_item');
 	$('#banner_nav ').on('click','.banner_nav_item', function(event) {
 		var $this = $(this),
 			n = $this.index();
 		console.log($banner_list.eq(n))
 		$banner_list.eq(n).animate({'opacity': 1},400,function(){console.log(n)})
 		// .siblings('.banner_item').animate({'opcity': 0},400);

 	});

})