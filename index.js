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

// Hospital-Themed HTML Response for Health Check
const hospitalHTML = `
  <html>
    <head>
      <title>HealthCare 360</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f8ff;
          color: #333;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #2e8b57;
        }
        .message {
          font-size: 20px;
          color: #4682b4;
        }
        .emoji {
          font-size: 40px;
        }
        .button {
          margin-top: 30px;
          padding: 15px 30px;
          background-color: #2e8b57;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 18px;
          cursor: pointer;
        }
        .button:hover {
          background-color: #3cb371;
        }
        img {
          margin-top: 20px;
          width: 300px;
          border-radius: 10px;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to HealthCare 360! 💉💊</h1>
      <div class="message">Your Health is Our Priority!</div>
      <div class="emoji">🏥</div>
      <div class="message">Everything is functioning well! You are safe with us.</div>
      <img src="https://via.placeholder.com/300.png?text=Your+Health+Matters" alt="Hospital Image" />
      <button class="button" onclick="alert('Stay Safe!')">Take Care</button>
    </body>
  </html>
`;

// Health check route to verify server is running smoothly
app.get('/health', (req, res) => {
  res.status(200).send(hospitalHTML);
});

// Main route for the app's homepage
app.get('/', (req, res) => {
  res.status(200).send(hospitalHTML);
});

// Start the server and log the success message with an emoji
app.listen(PORT, () => {
  console.log(`🚑 The server is running on port ${PORT} 🚑`);
});
