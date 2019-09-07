fetch('menu.html').then(response => {
    return response.text();
}).then(data => {
    document.querySelector("#menu").innerHTML = data;
    document.querySelectorAll("a").forEach(item => {
        item.onmouseleave = function () {
            var temp = this.text;
            this.innerText = this.dataset.english;
            this.dataset.english = temp;
        }

        item.onmouseenter = function () {
            var temp = this.text;
            this.innerText = this.dataset.english;
            this.dataset.english = temp;
        }
        item.addEventListener("click", function (event) {
            event.preventDefault();
            fetch(this.href).then(response => {
                return response.text();
            }).then(data=>{
                document.querySelector("#content").innerHTML = data;
            });
        })
    })
});