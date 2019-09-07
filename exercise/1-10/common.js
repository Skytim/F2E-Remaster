var menuBar = document.querySelectorAll(".menu>a");
// 第一次執行
loadPageToContent(document.querySelector("a[href='" + (location.hash.substr(1) || "Page0.html") + "']"));

menuBar.forEach(item => {
    item.addEventListener('click', function (event) {
        location.hash = this.getAttribute("href");
        event.preventDefault();
    }, false);
});

function loadPageToContent(domObject) {
    var href = domObject.getAttribute("href");
    fetch(href).then(response => {
        // 1.當 url 取的到頁面時，便回傳該頁面的資料
        // 2.否則拋出錯誤訊息

    }).then(data => {
        menuBar.forEach(item => {
            item.removeAttribute("class");
        });
        domObject.classList.add("selected");
        document.querySelector(".content").innerHTML = data;
    });
        // 3. 針對錯誤訊息做處理
}

window.addEventListener("hashchange", function () {
    loadPageToContent(document.querySelector("[href='" + (location.hash.substr(1) + "']")));
})