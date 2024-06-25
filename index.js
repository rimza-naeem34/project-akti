document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menuIcon");
    var dropdownMenu = document.getElementById("dropdownMenu");

    // Toggle dropdown menu visibility on hover of menu icon
    menuIcon.addEventListener("mouseover", function() {
        dropdownMenu.classList.add("active");
    });

    // Hide dropdown menu when mouse leaves menu icon or dropdown menu
    menuIcon.addEventListener("mouseleave", function() {
        dropdownMenu.classList.remove("active");
    });

    // Keep dropdown menu visible on click of menu icon
    menuIcon.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents the event from bubbling up and immediately closing the dropdown
        dropdownMenu.classList.toggle("active");
    });

    // Close dropdown menu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("active");
        }
    });

    // Close dropdown menu when clicking on a menu item
    dropdownMenu.querySelectorAll("li").forEach(function(item) {
        item.addEventListener("click", function() {
            dropdownMenu.classList.remove("active");
        });
    });
});
