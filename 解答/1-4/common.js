var header = document.querySelector("#header");
var footer = document.querySelector("#footer");
var sidebar = document.querySelectorAll("#sidebar .topic");

var action = "mouseover";
// 針對使用一次的函數可使用匿名函數
header.addEventListener(action, headerClick)
footer.addEventListener(action, footerClick)


function headerClick() {
    console.log("我是header的部分");

}
function footerClick() {
    console.log("我是footer的部分");
}

console.log("總共選到幾個DOM元件:" + sidebar.length);

for (var i = 0; i < sidebar.length; i++) {
    // 使用匿名函數
    sidebar[i].addEventListener(action, function () {
        console.log("作者是" + this.getAttribute("author"));
    })
}