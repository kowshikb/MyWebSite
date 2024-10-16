document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        // Toggle the active class on the clicked header
        header.classList.toggle('active');
        
        // Find the corresponding body for the clicked header
        const body = header.nextElementSibling;

        // If body is displayed, hide it; otherwise, show it
        if (body.style.display === "block") {
            body.style.display = "none";
            body.classList.remove('show'); // Remove show class
        } else {
            body.style.display = "block";
            body.classList.add('show'); // Add show class
        }
    });
});
