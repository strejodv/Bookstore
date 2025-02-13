document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.querySelector('.feedback-form');

    // Event listener for form submission
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Capture the form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create an object to store the form data
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Save the form data to localStorage
        localStorage.setItem('customerFeedback', JSON.stringify(formData));

        // Optionally, display a thank-you message or reset the form
        alert('Thank you for your feedback and custom order!');

        // Reset the form fields
        feedbackForm.reset();
    });

    // Optional: Display previously stored data on the page or console (if needed)
    const storedData = JSON.parse(localStorage.getItem('customerFeedback'));
    if (storedData) {
        console.log('Stored Feedback:', storedData);
    }
});
