document.addEventListener("DOMContentLoaded", function() {
    // Get last modified date
    const lastModifiedDate = document.lastModified;

    // Get the element with id "lastModified"
    const lastModifiedElement = document.getElementById('lastModified');

    // Set the text content of the element to the last modified date
    lastModifiedElement.textContent = "Last Modified: " + lastModifiedDate;
});

let date = new Date();
let year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;

// HAMBURGER MENU
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});



