fetch('common.html').then(response => {
    // 將拿到的資料作處理，只回傳text的部分
    return response.text();
}).then(data => {

    // 將 string 轉成DOM物件
    const doc = new DOMParser().parseFromString(data, "text/xml");

    // 在該DOM的物件中只取 header的部分
    let headrContent = doc.querySelector("#header>div");

    // 在該DOM的物件中只取 footer的部分
    let footContent = doc.querySelector("#footer>div");
    
    document.querySelector("#header").append(headrContent);
    document.querySelector("#footer").append(footContent);
});
