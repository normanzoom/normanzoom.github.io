// Add some basic JavaScript functionality here (optional)

// Example: Focus on the first input field on page load
document.getElementById('name').focus();

// Example:  Basic form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You would typically send this data to a server here.
    // For now, let's just display a simple alert.

    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
