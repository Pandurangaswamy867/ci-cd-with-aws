import express from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize the express app
const app = express();

// Middleware to parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the port, fallback to 8081 if not specified in the environment
const PORT = process.env.PORT || 8081;

// Hospital-Themed HTML Response with Additional Features
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
          margin-top: 60px;
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
          margin-top: 20px;
          padding: 15px 30px;
          background-color: #008CBA;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 18px;
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
        form {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input, textarea {
          margin: 10px 0;
          padding: 10px;
          border-radius: 5px;
          border: none;
          width: 80%;
          max-width: 400px;
        }
        textarea {
          height: 100px;
        }
        footer {
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          padding: 10px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }
        .footer-links a {
          color: #00A6ED;
          text-decoration: none;
          margin-left: 10px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Welcome to HealthCare 360! 💉💊</h1>
        <div class="message">Your Health is Our Priority!</div>
        <div class="emoji">🏥</div>
        <div class="message">Everything is functioning well! You are safe with us.</div>
        <button class="button" onclick="alert('Stay Safe!')">Take Care</button>
        <form method="POST" action="/contact">
          <h2>Contact Us</h2>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button class="button" type="submit">Submit</button>
        </form>
      </div>
      <footer>
        <div>&copy; 2024 HealthCare 360. All rights reserved.</div>
        <div class="footer-links">
          <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">LinkedIn</a>
        </div>
      </footer>
    </body>
  </html>
`;

// Endpoint to render the homepage
app.get('/', (req, res) => {
  res.status(200).send(hospitalHTML);
});

// Endpoint to handle form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New Contact Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  res.status(200).send(`
    <h1>Thank you, ${name}!</h1>
    <p>We have received your message and will get back to you shortly.</p>
    <a href="/" style="text-decoration: none; color: blue;">Go Back</a>
  `);
});

// API to fetch hospital data
app.get('/hospitals', (req, res) => {
  const hospitals = [
    { id: 1, name: 'City Hospital', location: 'New York', capacity: 200 },
    { id: 2, name: 'Green Valley Clinic', location: 'California', capacity: 150 },
    { id: 3, name: 'RiverSide Care', location: 'Texas', capacity: 300 },
  ];
  res.json(hospitals);
});

// Middleware to handle undefined routes
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <a href="/" style="text-decoration: none; color: blue;">Go to Home</a>
  `);
});

// Start the server and log the success message with an emoji
app.listen(PORT, () => {
  console.log(`🚑 The server is running on port ${PORT} 🚑`);
});
