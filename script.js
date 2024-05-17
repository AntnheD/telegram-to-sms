document.addEventListener('DOMContentLoaded', function() {
    // Event listener for form submission
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form values
        var name = document.getElementById('name').value;
        var countryCode = document.getElementById('countryCode').value;
        var phone = document.getElementById('phone').value;

        // Combine country code and phone number
        var phoneNumber = countryCode + phone;

        // Send data to server
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, phoneNumber: phoneNumber })
        })
        .then(response => {
            if (response.ok) {
                alert('Registration successful!'); // Show success message
            } else {
                throw new Error('Registration failed. Please try again later.'); // Show error message
            }
        })
        .catch(error => {
            alert(error.message);
        });
    });
});
