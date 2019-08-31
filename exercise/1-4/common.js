fetch('Menu.html').then(response => {
    return response.text();
}).then(data => {

    // 1. 得到目前瀏覽器的url，並且取該url 最後一個 / 後的字
    // 2. 將 Menu.html 塞進 menu 物件中
    // 3. 將 menu 中 其連結是目前url將它加上 selected的 class
});