fetch('Menu.html').then(response => {
    return response.text();
}).then(data => {
    let url = location.href;
    let href =url.substr(url.lastIndexOf("/") + 1);
    document.querySelector(".menu").innerHTML = data;
    document.querySelector("a[href='" + (href || "index.html") + "']").className = "selected";
});