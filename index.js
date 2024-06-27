

document.addEventListener("DOMContentLoaded", function() {
    var alertBox = document.getElementById("alert");
    alertBox.classList.add("show");

    setTimeout(function() {
        alertBox.classList.remove("show");
    }, 15000); // 15 seconds
});
