// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its ID
    const button = document.getElementById("myButton");

    // Add an event listener for the 'click' event on the button
    button.addEventListener("click", function() {
        // Show an alert when the button is clicked
        alert("Button clicked!");
    });
});
