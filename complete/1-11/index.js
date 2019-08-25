document.querySelector("#checkbox").addEventListener("change", function () {

    if (this.checked) {
        document.querySelector("#register").addEventListener("click", registerEvent);
    } else {
        document.querySelector("#register").removeEventListener("click",registerEvent);
    }
 
});
function registerEvent() {
    location.href = "../4-2/index.html";
};