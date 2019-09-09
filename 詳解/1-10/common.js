var menuBar = document.querySelectorAll(".menu>a");
// 第一次執行
loadPageToContent(document.querySelector("a[href='" + (location.hash.substr(1) || "Page0.html") + "']"));

menuBar.forEach(item => {

    item.onclick = function (event) {

        location.hash = this.getAttribute("href");
        event.preventDefault();
    }
});

function loadPageToContent(domObject) {
    var href = domObject.getAttribute("href");
    fetch(href).then(response => {
        // 當回應正確的時候
        if (response.ok) {
            return response.text();
        }
        // 當回應錯誤的時候
        else {
            // 拋出錯誤訊息
            throw new Error('找不到該網頁');
        }
    }).then(data => {
        menuBar.forEach(item => {
            item.removeAttribute("class");
        });
        domObject.classList.add("selected");
        document.querySelector(".content").innerHTML = data;
    }).catch(
        // 處理錯誤訊息
        function (error) {
            document.querySelector(".content").innerHTML = error.message;
        }
    );
}

window.addEventListener("hashchange", function () {
    loadPageToContent(document.querySelector("[href='" + (location.hash.substr(1) + "']")));
})