fetch('menu.html').then(response => {
    return response.text();
}).then(data => {
    document.querySelector("#menu").innerHTML = data;
    document.querySelectorAll("a").forEach(item => {
    })
    // 1.當 mouseenter以及 mouseleave時，將中英文字做置換
});