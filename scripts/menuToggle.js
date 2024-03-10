function toggleMenu() {
    var menu = document.getElementById("mainMenu");
    menu.classList.toggle("show");
}

document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});