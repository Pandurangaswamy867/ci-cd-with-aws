import express from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize the express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Set the port, fallback to 8081 if not specified in the environment
const PORT = process.env.PORT || 8081;

// Simulated Hospital-Themed Response
const hospitalGreeting = 'Welcome to HealthCare 360! 💉💊\nYour Health is Our Priority!';
const hospitalHealthCheck = 'All systems are functioning well! 🏥 You are safe with us.';

// Simulated Food Ordering-Themed Response
const foodOrderGreeting = 'Welcome to QuickBite! 🍔🍕\nFresh, Fast, and Delicious!';
const foodOrderMessage = 'Order placed successfully! 🍽️ Your meal is on its way!';

// Health check route to verify server is running smoothly (hospital theme)
app.get('/health', (req, res) => {
  res.status(200).send(hospitalHealthCheck);
});

// Main route for the app's homepage (food ordering theme)
app.get('/', (req, res) => {
  res.status(200).send(foodOrderGreeting);
});

// Start the server and log the success message with an emoji (hospital theme)
app.listen(PORT, () => {
  console.log(`🚑 The server is running on port ${PORT} 🚑`);
});
