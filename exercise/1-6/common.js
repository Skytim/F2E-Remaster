// 1.第一次進到該頁面時，將menu的第一個連結對應的頁面載入，並將連結後面加入hash

var menuBar = document.querySelectorAll(".menu>a");

menuBar.forEach(item => {
    item.addEventListener('click', function (event) {
        document.querySelector(".selected").className = "";
        loadPageToContent(this);
        event.preventDefault();
    }, false);
});



// 2.針對menu每一個連結做事件綁定，每次點選的時候便將指定的 href頁面 load頁面，並將連結後面加入hash

function loadPageToContent(domObject) {
    var href = domObject.getAttribute("href");
    fetch(href).then(response => {
        return response.text();
    }).then(data => {

    });
}