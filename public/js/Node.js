const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // serve static files from 'public' folder

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/water-saving-game', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Simple GET endpoint (you can expand this for more functionality)
app.get('/api/questions', (req, res) => {
    // Example: Fetch questions from MongoDB
    res.json(quizData); // Replace with database call if needed
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
