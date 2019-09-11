// 1.第一次進到該頁面時，將menu的第一個連結對應的頁面載入
// 2.針對menu每一個連結做事件綁定，每次點選的時候便將指定的 href頁面 load頁面

var menu = document.querySelectorAll("a");

for (var i = 0; i < menu.length; i++) {

}

// 將指定的 href頁面 load頁面
function loadPageToContent(href) {
    fetch(href).then(response => {
        return response.text();
    }).then(data => {
        document.querySelector(".content").innerHTML = data;
    });
}