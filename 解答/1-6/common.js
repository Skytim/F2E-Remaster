var menu = document.querySelector(".menu");

fetch('Menu.html').then(response => {
    return response.text();
}).then(data => {
    let url = location.href;
    document.querySelector(".menu").innerHTML = data;
    document.querySelector("a[href='" + (href || "index.html") + "']").className = "selected";
});