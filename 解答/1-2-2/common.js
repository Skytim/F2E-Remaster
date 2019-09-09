var topic = document.getElementsByClassName("topic");

alert("總共選到幾個元件" + topic.length);
for (var i = 0; i < topic.length; i++) {
    topic[i].onclick = function () {
        console.log("作者是" + this.getAttribute("author"));
    }
}