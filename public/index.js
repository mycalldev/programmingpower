
console.log('anything');

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('running');
    

    // Display a loading message
    const formMessage = document.getElementById('form-message');
    formMessage.innerHTML = 'Sending message...';
    formMessage.className = 'form-message';            

    try {
    // Send data to the server
    const response = await fetch('api/contact', {
        method: 'POST',
        headers: {
            'Host': 'example',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    const formMessage = document.getElementById('form-message');

    if (response.ok) {
        // Display success message
        formMessage.innerHTML = result.message || 'Your message has been sent successfully!';
        formMessage.className = 'form-message success';
        document.getElementById('contact-form').reset(); // Clear form
    } else {
        // Display error message
        formMessage.innerHTML = `Error ${result.message || 'Failed to send the message.'}`;
        formMessage.className = 'form-message error';
    }
} catch (error) {
    // Handle network or server errors
    console.error('Error:', error);

    const formMessage = document.getElementById('form-message');
    formMessage.innerHTML = 'Failed to send the message. Please try again later.';
    formMessage.className = 'form-message error';
}

});
