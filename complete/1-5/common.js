var menuBar = document.querySelectorAll(".menu>a");

loadPageToContent(document.querySelector(".menu>a"));


menuBar.forEach(item => {
    item.addEventListener('click', function (event) {
        menuBar.forEach(item => {
            item.removeAttribute("class");
        });
        loadPageToContent(this);
        event.preventDefault();
    }, false);
});

function loadPageToContent(domObject) {
    var href = domObject.getAttribute("href");
    fetch(href).then(response => {
        return response.text();
    }).then(data => {
        domObject.classList.add("selected");
        document.querySelector(".content").innerHTML = data;
        location.hash = href;
    });
}