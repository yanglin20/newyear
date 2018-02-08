var shareArr = GetQueryString('shareData').split('');

var key =keyword(shareArr[0]) + '+' + keyword(shareArr[1]) + '+' + keyword(shareArr[2]) + ',你呢？';
var title ='给您拜年啦！' +  GetQueryString("name") + '的春节=' + key; //标题
$(function() {
    var video = document.getElementById('video');
    var audio = document.getElementById('audio1');
    document.addEventListener('WeixinJSBridgeReady', function() {
        video.load();
        video.play();
        audio.load();
    });
    //开始音乐
    audioAutoPlay();

    var Vtimer = setInterval(function() {
        // if(video.ended){
        if (video.currentTime >= 3) {
            video.pause();
            clearInterval(Vtimer);
            // $('.video-page').hide();
            $('.end_page').fadeIn(2000);
        }
    }, 10);


    // var sub = GetQueryString("sub");

    var shareData = GetQueryString("shareData");
    // console.log('shareData='+shareData);

    // console.log(shareData.split('').sort().join(''));

    if (shareData.split('').sort().join('') == '123') {

        $('#video').attr('src', 'http://src.zhids.cn/src.sp/video/5866f324ad3b2b77397cf6c62a5d88ba.mp4');
        video.play();
        // console.log($('#video').attr('src'));
    } else {
        $('#video').attr('src', 'https://wb.jaas.ac.cn/Flash2017/SanBao.F.171222/img/2.mp4');
        video.play();
    }

    $('#name').text(GetQueryString("name"));

    


    $('.start').click(function() {
        // console.log(window.location.href.split("#")[0]);
        // window.location.href = './index.html';
        // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2e28ada41a098c42&redirect_uri=http%3a%2f%2fm.zhids.cn%2fapi%2fWXIsSubcribe_Callback.aspx&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect";
        $('.two').show();
        
    });

    $('.share').click(function() {
        $('.share-cover').show();
    });
    $('.share-cover').click(function() {
        $('.share-cover').hide();
    });

    $('.restart').click(function() {
        // window.location.href = './index.html';
        // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2e28ada41a098c42&redirect_uri=http%3a%2f%2fm.zhids.cn%2fapi%2fWXIsSubcribe_Callback.aspx&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect";
        $('.two').show();
    });

})

function audioAutoPlay() {
    document.addEventListener("WeixinJSBridgeReady", function() {
        audio.play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {
        audio.play();
    }, false);
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
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
