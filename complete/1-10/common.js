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
        return response.text();
    }).then(data => {

        domObject.classList.add("selected");
        document.querySelector(".content").innerHTML = data;
    });
}

window.addEventListener("hashchange", function () {
    document.querySelector(".selected").className = "";
    loadPageToContent(document.querySelector("[href='" + (location.hash.substr(1) + "']")));
})