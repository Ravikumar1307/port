// Smooth scroll effect for menu links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Stop default jump
        const targetId = this.getAttribute('href'); 
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Show a greeting in console
console.log("Welcome to Ravikumar's Portfolio 🚀");
