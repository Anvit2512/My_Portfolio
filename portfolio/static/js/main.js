document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript is working!");

    // Smooth scrolling for navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Button interaction
    document.querySelector('.btn').addEventListener('click', function() {
        alert('Contact form coming soon!');
    });
});
