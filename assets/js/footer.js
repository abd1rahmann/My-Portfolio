document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById("footer");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) { 
            footer.classList.add("visible");
        } else {
            footer.classList.remove("visible");
        }
    });
});
