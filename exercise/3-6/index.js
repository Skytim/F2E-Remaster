$(function () {
  $.getJSON("data.json", function (data) {
    $("#username").text(data.username);
    $("#image").attr("src", data.image);
    $("#photos").prepend(data.photos);
    $("#followers").prepend(data.followers);
  });
});