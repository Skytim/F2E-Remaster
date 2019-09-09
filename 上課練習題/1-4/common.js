document.querySelector("#header").onclick = clickHeader;
document.querySelector("#footer").onclick = clickFooter;
var sidebar = document.querySelectorAll("#sidebar .topic");


function clickHeader() {
    console.log("我是header的部分");
}

function clickFooter() {
    console.log("我是footer的部分");
};

console.log("總共選到幾個DOM元件:" + sidebar.length);

for (var i = 0; i < sidebar.length; i++) {
    sidebar[i].onclick = function () {
        console.log("作者是"+this.getAttribute("author"));
    }
}
// 請將上述的 onclick 方法改成  addEventListener 方法
// 將上述的 函數 改成 匿名函數