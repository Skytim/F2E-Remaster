var menuBar = document.querySelectorAll(".menu>a");
// 第一次執行
loadPageToContent(document.querySelector("a[href='" + (location.hash.substr(1) || "Page0.html") + "']"));

menuBar.forEach(item => {
    item.addEventListener('click', function (event) {
    }, false);
});

// 1.針對menu每一個連結做事件綁定，每次點選的時候便將指定的 href加入目前href後面加hash


function loadPageToContent(domObject) {
    var href = domObject.getAttribute("href");
    fetch(href).then(response => {
        return response.text();
    }).then(data => {
        menuBar.forEach(item => {
            item.removeAttribute("class");
        });
        domObject.classList.add("selected");
        document.querySelector(".content").innerHTML = data;
    });
}

// 2.當 url 的 hash 改變時，便刷新頁面