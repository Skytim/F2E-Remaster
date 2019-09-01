var header = document.querySelector("#header");
var footer = document.querySelector("#footer");
var sidebar = document.querySelectorAll("#sidebar .topic");


header.onclick = function () {
    console.log("我是header的部分");
}

footer.onclick = function () {
    console.log("我是footer的部分");
};
console.log("總共選到幾個DOM元件:" + sidebar.length);

for (var i = 0; i < sidebar.length; i++) {
    sidebar[i].onclick = function () {
        console.log(item.getAttribute("author"));
    }
}