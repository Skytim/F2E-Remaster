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
        });
        item.addEventListener("click", function (event) {

        })
          // 1.當 click時，將該click物件中的url資料傳進content
    })
});