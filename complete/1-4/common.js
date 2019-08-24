loadPageToContent(document.querySelector(".menu>a").getAttribute("href"));


document.querySelectorAll(".menu>a").forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        loadPageToContent(this.href);
    }, false);
});

function loadPageToContent(href) {
    fetch(href).then(response => {
        return response.text();
    }).then(data => {
        document.querySelector(".content").innerHTML = data;
    });
}