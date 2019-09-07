// 第一次進網頁的時候，取 menu 第一個 連結載入至頁面
var firstButton = document.querySelector(".menu>a");
firstButton.className = "selected";
loadPageToContent(firstButton.getAttribute("href"));

// 對menu 的每一個選項做事件綁定
document.querySelectorAll(".menu>a").forEach(item => {

    item.onclick = function (event) {
        event.preventDefault();
        // 清空被選擇的物件
        document.querySelector(".selected").className = "";
        this.className = "selected";
        loadPageToContent(this.href);

    }
});


// 將指定的 href頁面 load頁面
function loadPageToContent(href) {
    fetch(href).then(response => {
        return response.text();
    }).then(data => {
        document.querySelector(".content").innerHTML = data;
    });
}