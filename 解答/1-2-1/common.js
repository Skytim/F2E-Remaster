var topic = document.getElementsByClassName("topic");

for (var i = 0; i < 5; i++) {
    alert("作者是" + topic[i].getAttribute("author"));
}