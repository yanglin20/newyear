// 判断是不是手机打开
var isOnPc = !(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));
if(isOnPc && !GetQueryString1("ysq") ) {
    var nowUrlWap = window.location.href.split("#")[0];
       location.href = "./wap2pc/pc.html?ysq=1&title=" + encodeURI(encodeURI(document.title)) + "&url=" + encodeURI(encodeURI(nowUrlWap));

}
function GetQueryString1(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}