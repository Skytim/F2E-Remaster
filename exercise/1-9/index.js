fetch('menu.html').then(response => {
    return response.text();
}).then(data => {
    document.querySelector("#menu").innerHTML = data;
    document.querySelectorAll("a").forEach(item => {
        item.addEventListener("mouseleave", function () {
            var temp = this.text;
            this.innerText = this.dataset.english;
            this.dataset.english = temp;
        });
        item.addEventListener("mouseenter", function () {
            var temp = this.text;
            this.innerText = this.dataset.english;
            this.dataset.english = temp;
        })
    })
    // 1.當 mouseenter以及 mouseleave時，將中英文字做置換
});