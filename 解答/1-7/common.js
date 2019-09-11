// 第一次進網頁的時候，取 menu 第一個 連結載入至頁面
var firstButton = document.querySelector(".menu>a");
firstButton.className = "selected";
loadPageToContent(firstButton.getAttribute("href"));

var menu = document.querySelectorAll(".menu>a");

for (var i = 0; i < menu.length; i++) {

    menu[i].onclick = function (event) {
        event.preventDefault();
        // 清空被選擇的物件
        document.querySelector(".selected").className = "";
        this.className = "selected";
        loadPageToContent(this.href);
    }
}


// 將指定的 href頁面 load頁面
function loadPageToContent(href) {
    fetch(href).then(response => {
        return response.text();
    }).then(data => {
        document.querySelector(".content").innerHTML = data;
    });
}