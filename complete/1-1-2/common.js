var sidebar = document.getElementsByClassName("topic");

alert("總共選到幾個元件" + sidebar.length);
for (var i = 0; i < sidebar.length; i++) {
    sidebar[i].onclick = function () {
        // alert("作者是" + this.getAttribute("author"));
        console.log("作者是" + this.getAttribute("author"));
    }
}