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

// Hospital-Themed HTML Response with Background Images, Vibrant Colors, and Modern Look
const hospitalHTML = `
  <html>
    <head>
      <title>HealthCare 360</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-image: url('https://via.placeholder.com/1500x800.png?text=Hospital+Background');
          background-size: cover;
          background-position: center;
          color: #fff;
          text-align: center;
        }
        h1 {
          color: #ffffff;
          font-size: 3em;
          margin-top: 100px;
        }
        .message {
          font-size: 1.5em;
          margin-top: 20px;
          color: #ffffff;
        }
        .emoji {
          font-size: 60px;
          margin-top: 20px;
        }
        .button {
          margin-top: 40px;
          padding: 20px 40px;
          background-color: #008CBA;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 20px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .button:hover {
          background-color: #005f6a;
        }
        .card {
          background-color: rgba(0, 0, 0, 0.6);
          padding: 30px;
          margin: 50px auto;
          width: 80%;
          border-radius: 15px;
        }
        img {
          margin-top: 20px;
          width: 350px;
          border-radius: 10px;
        }
        footer {
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          padding: 10px;
          color: white;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Welcome to HealthCare 360! 💉💊</h1>
        <div class="message">Your Health is Our Priority!</div>
        <div class="emoji">🏥</div>
        <div class="message">Everything is functioning well! You are safe with us.</div>
        <img src="https://via.placeholder.com/350x200.png?text=Your+Health+Matters" alt="Hospital Image" />
        <button class="button" onclick="alert('Stay Safe!')">Take Care</button>
      </div>
      <footer>
        <div>&copy; 2024 HealthCare 360. All rights reserved.</div>
      </footer>
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
