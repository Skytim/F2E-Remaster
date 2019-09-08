document.querySelector("#checkbox").addEventListener("change", function () {
    var  register =  document.querySelector("#register");
    if (this.checked) {
        register.addEventListener("click", registerEvent);
    } else {
        var new_element =  register.cloneNode(true);
        register.parentNode.replaceChild(new_element, register);
    }
 
});
function registerEvent() {
    location.href = "../4-2/index.html";
};