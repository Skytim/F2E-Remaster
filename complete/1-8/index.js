// $(function() {
//     $(window).load(function() {
//         $(".loading").fadeOut();
//     });
//     var progress = 0;
//     $("img").load(function() {
//         progress += 100 / $("img").length;
//         var percent = Math.round(progress) + "%";
//         $(".txt").text(percent);
//         $(".bar").width(percent);
//     });
// });




window.onload = function () {
    var progress = 0;
    var allImages= document.querySelectorAll('img');
    allImages.forEach(item => {
        progress += 100 /allImages.length;
        console.log(progress);
        let percent = Math.round(progress) + "%";
        document.querySelector(".txt").textContent =percent;
        document.querySelector(".bar").textContent =percent;
    });
    setTimeout(function () {
        document.querySelector("#loading").style.display = 'none';
    }, 500);
}