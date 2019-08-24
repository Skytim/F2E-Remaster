$(function () {
    function show(data) {
        if (data != undefined) {
            for (var i = 0; i < data.length; i++) {
                $("body").append("<div>" + data[i] + "</div>");
            }
        }
    }
    var ary = ["John", "Tom", "Mark"];
    if (ary.length > 0) {
        show(ary);
    }


    show(["John", "Tom", "Mark"]);
});