document.querySelector("#header") = clickHeader;
document.querySelector("#footer") = clickFooter;

// 也可宣告成匿名函數
function clickHeader() {
    console.log("我是header的部分");
}

function clickFooter() {
    console.log("我是footer的部分");
};