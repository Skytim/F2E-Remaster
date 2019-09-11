var menu = document.querySelector(".menu");

fetch('Menu.html').then(response => {
    return response.text();
}).then(data => {
    menu.innerHTML = data;
    // 取得 Url
    let url = location.href;
    let href =url.substr(url.lastIndexOf("/") + 1);
    // 選取 Url
    document.querySelector("a[href='" + (href || "index.html") + "']").className = "selected";
});