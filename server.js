const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.static('public')); // Serve static files

// Route to handle contact form submissions

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Simulate saving the data (or sending an email)
    

    // Respond with success
    res.status(200).json({ message: `you have successfully sent ${name}${email}${message}` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
