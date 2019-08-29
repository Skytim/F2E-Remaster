// 第一次 loading Page
loadPageToContent(document.querySelector(".menu>a").getAttribute("href"));
// 對menu 的每一個選項做事件綁定
document.querySelectorAll(".menu>a").forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        loadPageToContent(this.href);
    }, false);
});

// 將指定的 href頁面 load頁面
function loadPageToContent(href) {
    fetch(href).then(response => {
        return response.text();
    }).then(data => {
        document.querySelector(".content").innerHTML = data;
    });
}