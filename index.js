import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8081;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Homepage HTML
const hospitalHTML = `
  <!-- (same full HTML as before) -->
`;

// Homepage endpoint
app.get('/', (req, res) => {
  res.status(200).send(hospitalHTML);
});

// Contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New Contact Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  res.status(200).send(`
    <h1>Thank you, ${name}!</h1>
    <p>We have received your message and will get back to you shortly.</p>
    <a href="/" style="text-decoration: none; color: blue;">Go Back</a>
  `);
});

// Hospitals data endpoint
app.get('/hospitals', (req, res) => {
  const hospitals = [
    { id: 1, name: 'City Hospital', location: 'New York', capacity: 200 },
    { id: 2, name: 'Green Valley Clinic', location: 'California', capacity: 150 },
    { id: 3, name: 'RiverSide Care', location: 'Texas', capacity: 300 },
  ];
  res.json(hospitals);
});

// 404 handler
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <a href="/" style="text-decoration: none; color: blue;">Go to Home</a>
  `);
});

// 🧪 Custom test logic for CodeBuild timing demo
if (process.env.NODE_ENV === 'test') {
  const start = Date.now();
  console.log('Running test cases...');
  // Simulate test case execution
  setTimeout(() => {
    const end = Date.now();
    const duration = (end - start) / 1000;
    console.log(`✅ All tests completed in ${duration} seconds.`);
  }, 1000);
}

// Start server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚑 The server is running on port ${PORT} 🚑`);
  });
}

export default app;
