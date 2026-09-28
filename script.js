// Wait for the DOM content to load before attaching listeners
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status');

  // Handle form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    const name = document.getElementById('name').value;

    // Display a simple confirmation message
    statusMsg.textContent = `Thank you, ${name}! Your message has been received.`;

    // Clear form inputs
    contactForm.reset();
  });
});