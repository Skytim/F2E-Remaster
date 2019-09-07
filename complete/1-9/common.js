var menuBar = document.querySelectorAll(".menu>a");

loadPageToContent(document.querySelector("a[href='" + (location.hash.substr(1) || "Page0.html") + "']"));


menuBar.forEach(item => {
    item.onclick=function(){
        document.querySelector(".selected").className = "";
        loadPageToContent(this);
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
        location.hash = href;
    });
}