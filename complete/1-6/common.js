var menuBar = document.querySelectorAll(".menu>a");
loadPageToContent(document.querySelector("[href='" + (location.hash.substr(1)+ "']")));

menuBar.forEach(item => {
    item.addEventListener('click', function (event) {
        location.hash = this.getAttribute("href");
        event.preventDefault();
    }, false);
});

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

window.addEventListener("hashchange",function(){
    loadPageToContent(document.querySelector("[href='" + (location.hash.substr(1)+ "']")));
})