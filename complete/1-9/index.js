// $(function() {
//     $("#menu").load("menu.html", function() {
//         $(this).find("a").on("mouseenter mouseleave", function() {
//             var temp = $(this).text();
//             $(this).text($(this).data("english"));
//             $(this).data("english", temp);
//         });
//     });
// });

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
});