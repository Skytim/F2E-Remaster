
var progress = 0;
var allImages = document.querySelectorAll('img');
allImages.forEach(item => {
    item.onload = function () {
        progress += 100 / allImages.length;
        let percent = Math.round(progress) + "%";
        document.querySelector(".txt").textContent = percent;
        document.querySelector(".bar").textContent = percent;
        if ((progress / 10) == allImages.length) {
            document.querySelector("#loading").style.display = 'none';
        }
        console.log(progress);
    }
});



