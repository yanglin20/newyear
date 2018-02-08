function isZhidsApp() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/HowMuchApp/i) == 'howmuchapp') {
        return true;
    } else {
        return false;
    }
}

function isIOS() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return isiOS;
}

function isAndroid() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return isAndroid;
}

function isShare() {
    return true;
}
function isPost() {
    return false;
}

if (isAndroid() && isZhidsApp()) {
    AndroidWebView.SetNoButton();
    // AndroidWebView.Share(title, contenttext.substring(0, 20), 'url'，
    //     '封面Url');
    AndroidWebView.Share(title, desc, link,imageUrl);

}
function ShareData() {
    return [title, desc, link,imageUrl];
}


