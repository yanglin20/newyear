var title = document.title; //标题
$(function() {
    var flag = false;
    var bar_width = 0;
    var shareData = '';
    var audio = document.getElementById('audio');
    var audio1 = document.getElementById('audio1');
    document.addEventListener('WeixinJSBridgeReady', function() {
        audio.load();
    });
    //开始音乐
    audioAutoPlay();
    audio1.pause();
    $('.btn').click(function() {
        $('.name_text').hide();

        if ($(this).text() == '填写你的姓名') {
            $('.name-input').show();
        }

        if ($('.bar_name').length < 3) {
            if ($(this).text() != '已选') {
                var keyword0 = keyword(mySwiper.activeIndex);
                var a = '<div class="bar_name select' + mySwiper.activeIndex + '"data-index="' + mySwiper.activeIndex + '"onClick="click_name(this)">' + keyword0 + '</div>';
                $('.name_box').append(a);
                bar_width = 1.34 * ($('.bar_name').length) + 'rem';

                $('.bar').css('transition', 'all 0.2s linear');
                $('.bar').width(bar_width);
                if ($('.bar_name').length < 3) {
                    $(this).text('已选');
                    $(this).addClass('active-btn');
                } else {
                    $('.btn').text('填写你的姓名');
                    $('.btn').addClass('active-btn');
                }
            } else {
                $(this).text('选择');
                $(this).removeClass('active-btn');
                $('.select' + mySwiper.activeIndex).remove();
                bar_width = 1.33 * ($('.bar_name').length) + 0.1 + 'rem';
                $('.bar').width(bar_width);
            }

            if ($('.bar_name').length != 0) {
                $('.name_text').hide();
            } else {
                $('.name_text').show();
            }
        } else {
            // $('.btn').text('填写你的姓名');
        }



    });

    $('.video-btn').click(function() {
        shareData = '';
        $('.name_box .bar_name').each(function(index, e) {
            shareData += number($(e).text());
            // console.log(shareData);
        });
        if ($('.name-input input').val().length > 0) {
            audio.pause();
            audio1.play();
            flag=true;
            $('#video').attr('src', 'http://src.zhids.cn/src.sp/video/5866f324ad3b2b77397cf6c62a5d88ba.mp4');
            video.play();
            $('#name').text($('.name-input input').val());
            $('.page2').show();
            var shareArr=shareData.split('');
            var key =keyword(shareArr[0]) + '+' + keyword(shareArr[1]) + '+' + keyword(shareArr[2]) + ',你呢？';
            var title ='给您拜年啦！' +  $('.name-input input').val() + '的春节=' + key; 

            console.log(shareData.split('').sort().join(''));
            console.log(title);
            getJsapiTicket(window.location.href.split("#")[0],title);
        } else {
            alert('姓名不能为空');
        }
    })

    var Vtimer = setInterval(function() {
        // if(video.ended){
        if (video.currentTime >= 3) {
            video.pause();
            clearInterval(Vtimer);
            // $('.video-page').hide();
            $('.end_page').fadeIn(2000);
        }
    }, 10);

    
    $('.start').click(function() {
        $('.two').show();
        
    });

    $('.share').click(function() {
        $('.share-cover').show();
    });
    $('.share-cover').click(function() {
        $('.share-cover').hide();
    });

    $('.restart').click(function() {
        $('.two').show();
    });
});

function audioAutoPlay() {
    document.addEventListener("WeixinJSBridgeReady", function() {
        audio.play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {
        audio.play();
    }, false);
}

function click_name(m) {
    $(m).remove();
    $('.btn').text('选择');
    $('.btn').removeClass('active-btn');
    $('.bar_name').each(function(i, e) {
        $('.swiper-slide').eq($(e).attr('data-index')).find('.btn').text('已选');
        $('.swiper-slide').eq($(e).attr('data-index')).find('.btn').addClass('active-btn');
    })

    bar_width = 1.33 * ($('.bar_name').length) + 0.1 + 'rem';
    $('.bar').width(bar_width);

    if ($('.bar_name').length == 0) {
        $('.name_text').show();
    }
    if ($('.bar_name').length < 3) {
        $('.name-input').hide();
    }
}


function keyword(a) {
    switch (Number(a)) {
        case 1:
            return '在路上';
            break;
        case 2:
            return '胖三斤';
            break;
        case 3:
            return '胡了';
            break;
        case 4:
            return '走亲戚';
            break;
        case 5:
            return '求脱单';
            break;
        case 6:
            return '抢红包';
            break;
        case 7:
            return '发红包';
            break;
        case 8:
            return '啪啪啪';
            break;
        case 9:
            return '吐槽晚会';
            break;
        case 10:
            return '老铁聚会';
            break;
        case 11:
            return '出去浪';
            break;
    }
}
function number(a) {
    switch (a) {
        case '在路上':
            return 1;
            break;
        case '胖三斤':
            return 2;
            break;
        case '胡了':
            return 3;
            break;
        case '走亲戚':
            return 4;
            break;
        case '求脱单':
            return 5;
            break;
        case '抢红包':
            return 6;
            break;
        case '发红包':
            return 7;
            break;
        case '啪啪啪':
            return 8;
            break;
        case '吐槽晚会':
            return 9;
            break;
        case '老铁聚会':
            return 'a';
            break;
        case '出去浪':
            return 'b';
            break;
    }
}
//判断是否是微信里浏览
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}





