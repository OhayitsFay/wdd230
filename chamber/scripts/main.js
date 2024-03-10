document.addEventListener("DOMContentLoaded", function() {
    // Get last modified date
    const lastModifiedDate = document.lastModified;

    // Get the element with id "lastModified"
    const lastModifiedElement = document.getElementById('lastModified');

    // Set the text content of the element to the last modified date
    lastModifiedElement.textContent = "Last Modified: " + lastModifiedDate;
});
