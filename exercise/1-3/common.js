fetch('common.html').then(response => {
    // 將拿到的資料作處理，只回傳text的部分
    return response.text();
}).then(data => {

    // 1.請將data轉換成 dom element
    // 2.將轉換好的 dom element 只選取header的部分並且塞進header
    // 3.將轉換好的 dom element 只選取footer的部分並且塞進footer
});
