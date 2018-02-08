var link = window.location.href.split("#")[0]; //当前网页地址
// var title = document.title; //标题
var desc = document.body.getAttribute("data-desc"); //描述
var imageUrl = document.body.getAttribute("data-img"); //分享图片地址
var createNonceStr = function() {
    return Math.random().toString(36).substr(2, 15);
};

var createTimestamp = function() {
    return parseInt(new Date().getTime() / 1000) + '';
};

function raw(args) {
    var keys = Object.keys(args);
    keys = keys.sort()
    var newArgs = {};
    keys.forEach(function(key) {
        newArgs[key.toLowerCase()] = args[key];
    });

    var string = '';
    for (var k in newArgs) {
        string += '&' + k + '=' + newArgs[k];
    }
    string = string.substr(1);
    // console.log(string);
    return string;
};

/**
 * @synopsis 签名算法 
 *
 * @param jsapi_ticket 用于签名的 jsapi_ticket
 * @param url 用于签名的 url ，注意必须动态获取，不能 hardcode
 *
 * @returns
 */
function getJsapiTicket(url,title) {
    // console.log(title);
    $.ajax({
        type: "get",
        async: false,
        url: "http://api.zhids.cn/api/generally/WXTicket",
        complete: function(XMLHttpRequest, textStatus) {},
        success: function(data) {
            sign(data.ticket, url,title);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}
function sign(jsapi_ticket, url,title) {
    var ret = {
        jsapi_ticket: jsapi_ticket,
        nonceStr: createNonceStr(),
        timestamp: createTimestamp(),
        url: url
    };
    var string = raw(ret);

    var sha = hex_sha1(string);

    ret.signature = hex_sha1(string);
    ret.appId = 'wx2e28ada41a098c42',
        design(ret,title);
};

/*****微信分享开始******/
function design(wxconfig,title) {
    console.log(wxconfig);
    console.log(title);
    wx.config({
        debug: false,
        appId: wxconfig.appId, // 公众号的唯一标识
        timestamp: wxconfig.timestamp, // 生成签名的时间戳
        nonceStr: wxconfig.nonceStr, // 生成签名的随机串
        signature: wxconfig.signature, // 签名
        jsApiList: ['onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ', 
                'onMenuShareQZone',
            ] // 需要使用的JS接口列表
    });

    //处理失败验证
    wx.error(function(res) {
        conaole.log(res);
    });
    wx.ready(function() {
        //分享到朋友圈
        wx.onMenuShareTimeline({
            title: title, // 分享标题
            link: link, // 分享链接 
            desc: desc, // 分享描述
            imgUrl: imageUrl, // 分享图标
            success: function() {

            },
            cancel: function() {

            }
        });
        //分享给朋友
        wx.onMenuShareAppMessage({
            title: title, // 分享标题
            link: link, // 分享链接 
            desc:desc, // 分享描述
            imgUrl: imageUrl, // 分享图标
            success: function() { 
                // alert('分享成功'); 
            },
            cancel: function() {},
            fail: function(res) {

            }
        });
    });
}
/*****微信分享结束******/
getJsapiTicket(window.location.href.split("#")[0],title);
