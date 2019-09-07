var header = document.querySelector("#header");
var footer = document.querySelector("#footer");
var sidebar = document.querySelectorAll("#sidebar .topic");


header.addEventListener("click",function(){
    console.log("我是header的部分");
})

footer.addEventListener("click",function(){
    console.log("我是footer的部分");
})

console.log("總共選到幾個DOM元件:" + sidebar.length);

for (var i = 0; i < sidebar.length; i++) {
    sidebar[i].addEventListener("click",function(){
        console.log("作者是"+this.getAttribute("author"));
    })
}