var header = document.querySelector("#header");
var footer = document.querySelector("#footer");


fetch('header.html').then(response => {
    return response.text();
}).then(data => {
   header.innerHTML = data;
});

fetch('footer.html').then(response => {
    return response.text();
}).then(data => {
   footer.innerHTML = data;
});