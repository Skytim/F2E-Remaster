var clickHeader = function () {
    alert("我是header的部分");
}

var clickFooter = function () {
    alert("我是footer的部分");
}

document.getElementById("header").onclick = clickHeader;
document.getElementById("footer").onclick = clickFooter;

