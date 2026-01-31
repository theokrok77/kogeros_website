// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`);
    
    // Clear the form
    this.reset();
});

// Book button handling
document.querySelectorAll('.book-button').forEach(button => {
    button.addEventListener('click', function() {
        const apartmentName = this.closest('.apartment-card').querySelector('h3').textContent;
        alert(`Booking request for: ${apartmentName}\n\nPlease contact us through the contact form for booking inquiries.`);
    });
});
