$(function() {

    // 导航
    $('#nav_tab_btn').on('click', function() {
        $('#header').toggleClass('toggle');
    });

    $('#nav_box').on('click', function() {
        $('#header').removeClass('toggle');
    });

    // 下拉 框
    $('.c_select_btn').on('click', function(event) {
        $(this).parent('.c_select').toggleClass('on');
    });
    $('.c_select_list').on('click', '.c_select_item', function(event) {
        var $this = $(this);
        // $this.addClass('active').siblings('.c_select_item').removeClass('active')
        $this.parent('.c_select_list').prev('.c_select_btn').text($this.text()).parent('.c_select').removeClass('on');
    });
    $(".c_select").blur(function(event) {
        /* Act on the event */
        $(this).removeClass('on');
    });


    // 回到顶部
    $("#go_top").click(function() {
        var speed = 200; //滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });

    $(window).scroll(function(event) {

        if ($(window).scrollTop() > 500) {
            $('#go_top_box').show();
        } else {
            $('#go_top_box').hide();
        }
    });

    // 语言 切换
    $('.language').on('click', 'div', function(event) {
        /* Act on the event */
        $(this).addClass('active').siblings('div').removeClass('active');
        $('.language>div').removeClass('hover');
    });
    $('.language>div').hover(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('hover').siblings('div').addClass('hover');
        }
    }, function() {
        $('.language>div').removeClass('hover')
        /* Stuff to do when the mouse leaves the element */
    });

    // var banner_n = 0;
    // banner
    var $banner_list = $('.banner_item');
    $('#banner_nav ').on('click', '.banner_nav_item', function(event) {
        var $this = $(this),
            n = $this.index();
        $banner_list.eq(n).animate({ opacity: 1 }, 800).siblings('.banner_item').animate({ opacity: 0 }, 800);

    });

    // img

    img_box('j_img', 407, 272,img_hover);
    img_box('j_img-2', 370, 246);
    img_box('img_box_x', 504, 644);

    $(window).resize(function(event) {
        window.location.reload()
    //     /* Act on the event */
        // img_box('j_img', 407, 272,img_hover);
        // img_box('j_img-2', 370, 246);
        // img_box('img_box_x', 504, 644);
        // banner_2();
    });

    function img_hover(cl,w,h){
        $('.'+cl).off();
        $('.'+cl).hover(function() {
            var $this = $(this);
            $this.animate({
                width: w + 30,
                height: h + 30,
                margin: -15},
                200
            );
        }, function() {
            var $this = $(this);
            $this.animate({
                width: w,
                height: h,
                margin: 0},
                200
            );
        });
    }

    // 
    function img_box(cl, w, h,call) {
        if ($('.' + cl)) {
            var img_w = $('.' + cl).eq(0).width();
            $('.' + cl).height(img_w * h / w);
            call&&call(cl, img_w, img_w * h / w);
        }
    }

    // 图片左右滚动
    roll_box('j_roll_box');

    function roll_box(id) {
        var $box = $('#' + id),
            $list = $('#' + id + '>li'),
            n = $list.length,
            $p = $box.parent(),
            w2 = $p.width(),
            w1 = 308,
            w = n * 308;

            if( w2 <= 308 ){
                w2 = 308
            }

        $box.css('width', w + 'px');

        $('#j_right_btn').on('click', function() {
            var ml = parseInt($box.css('marginLeft')),
                ml_2 = ml - w2;

            if (ml_2 < w2 - w) {
                ml_2 = w2 - w;
            }
            $box.animate({ marginLeft: ml_2 }, {
                easing: 'swing',
                duration: 500,
                complete: function() {
                    if (ml_2 <= w2 - w) {
                        $('#j_right_btn').hide();
                    }
                    $('#j_left_btn').show();
                }
            });
        });

        $('#j_left_btn').on('click', function() {

            var ml = parseInt($box.css('marginLeft')),
                ml_2 = ml + w2;

            if (ml_2 > 0) {
                ml_2 = 0;
            }
            $box.animate({ marginLeft: ml_2 }, {
                easing: 'swing',
                duration: 500,
                complete: function() {
                    if (ml_2 >= 0) {
                        $('#j_left_btn').hide();
                    }
                    $('#j_right_btn').show();
                }
            });

        });

    }



    // 
    banner_2();

    function banner_2() {
        var $box = $('#det_img_box'),
            $list = $('#det_img_list'),
            $item = $('#det_img_list>.det_img_item'),
            $btn_list = $('.det_img_btn-item');
        n = $item.length,
            w = $box.width(),
            h = w / 520 * 346,
            w2 = n * w;

        $list.width(w2).height(h);
        $item.width(w).height(h);
        $box.height(h);

        $('#det_img_btn_r').off();
        $('#det_img_btn_r').on('click', function(event) {
            var ml = parseInt($list.css('marginLeft')),
                ml_2 = ml - w;
            if (ml_2 < w - w2) {
                ml_2 = w - w2;
            }
            $list.animate({ marginLeft: ml_2 }, {
                easing: 'swing',
                duration: 300,
                complete: function() {
                    $btn_list.removeClass('active');
                    $btn_list.eq(-ml_2 / w).addClass('active');
                }
            });
        });
        $('#det_img_btn_l').off();
        $('#det_img_btn_l').on('click', function(event) {
            var ml = parseInt($list.css('marginLeft')),
                ml_2 = ml + w;
            if (ml_2 > 0) {
                ml_2 = 0;
            }
            $list.animate({ marginLeft: ml_2 }, {
                easing: 'swing',
                duration: 300,
                complete: function() {
                    $btn_list.removeClass('active');
                    $btn_list.eq(-ml_2 / w).addClass('active');
                }
            });
        });

        $btn_list.off();
        $btn_list.on('click', function(event) {
            var $this = $(this),
                index = $this.index();
            $btn_list.removeClass('active');
            $this.addClass('active');

            $list.animate({ marginLeft: -index * w }, {
                easing: 'swing',
                duration: 300,
                complete: function() {
                    // $btn_list.removeClass('active');
                    // $btn_list.eq(-ml_2/w).addClass('active');
                }
            });

        });

    }
})