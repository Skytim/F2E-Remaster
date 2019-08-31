var header = document.querySelector("#header");
var footer = document.querySelector("#footer");
var sidebar = document.querySelectorAll(".topic");
header.addEventListener("click",function(){
    console.log("我是header的部分");
});

footer.addEventListener("click",function(){
    console.log("我是footer的部分");
});
sidebar.forEach(item=>{
    // console.log(item);
    item.addEventListener("click",function(){
        alert("作者是"+item.getAttribute("author"));
    });
});