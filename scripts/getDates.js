
document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

document.addEventListener("DOMContentLoaded", function() {
    // Array of learning activities
    const learningActivities = [
        { week: 'Week 1', activity: 'Layout | Media Query | JS Pen' },
        { week: 'Week 2', activity: '' },
        { week: 'Week 3', activity: '' },
        { week: 'Week 4', activity: '' },
        { week: 'Week 5', activity: '' },
        { week: 'Week 6', activity: '' }
    ];

    // Get the ul element to populate
    const learningList = document.getElementById('learningActivities');

    // Loop through the learning activities array and create list items
    learningActivities.forEach(activity => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = '#' + activity.week.toLowerCase().replace(' ', '-'); // Generating dynamic anchor links
        anchor.textContent = `${activity.week}: ${activity.activity}`;
        listItem.appendChild(anchor);
        learningList.appendChild(listItem);
    });

    // Get current year for footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Get last modified date
    const lastModifiedDate = document.lastModified;

    // Get the element with id "lastModified"
    const lastModifiedElement = document.getElementById('lastModified');

    // Set the text content of the element to the last modified date
    lastModifiedElement.textContent = "Last Modified: " + lastModifiedDate;
});
