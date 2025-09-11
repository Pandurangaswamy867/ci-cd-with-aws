import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8081;

// Updated Hospital-Themed HTML
const hospitalHTML = `
  <html>
    <head>
      <title>HealthCare 360</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
          background-image: url('https://via.placeholder.com/1600x900.png?text=Hospital+Background');
          background-size: cover;
          background-position: center;
          color: #fff;
          text-align: center;
        }
        .overlay {
          background: rgba(0,0,0,0.6);
          min-height: 100vh;
          padding-bottom: 60px;
        }
        nav {
          background-color: rgba(0, 0, 0, 0.8);
          padding: 15px;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        nav a {
          color: #fff;
          margin: 0 15px;
          text-decoration: none;
          font-size: 18px;
          transition: color 0.3s ease;
        }
        nav a:hover {
          color: #00e5ff;
        }
        h1 {
          color: #00e5ff;
          font-size: 3.2em;
          margin-top: 60px;
        }
        .message {
          font-size: 1.4em;
          margin-top: 15px;
          color: #fff;
        }
        .emoji {
          font-size: 60px;
          margin-top: 20px;
        }
        .button {
          margin-top: 30px;
          padding: 15px 35px;
          background: linear-gradient(45deg, #008CBA, #00e5ff);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 20px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .button:hover {
          transform: scale(1.05);
        }
        .services {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 50px auto;
          width: 80%;
        }
        .card {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 25px;
          border-radius: 15px;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .card:hover {
          transform: translateY(-8px);
          background-color: rgba(255, 255, 255, 0.2);
        }
        .card img {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 15px;
        }
        footer {
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.85);
          padding: 15px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .socials a {
          color: white;
          margin: 0 10px;
          font-size: 20px;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .socials a:hover {
          color: #00e5ff;
        }
      </style>
    </head>
    <body>
      <div class="overlay">
        <nav>
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#contact">Contact</a>
        </nav>
        
        <h1>Welcome to HealthCare 360! 🏥</h1>
        <div class="message">Your Health is Our Priority 💉💊</div>
        <div class="emoji">❤️</div>
        <button class="button" onclick="alert('Stay Safe & Healthy!')">Take Care</button>
        
        <!-- Services Section -->
        <section id="services" class="services">
          <div class="card">
            <img src="https://via.placeholder.com/300x180.png?text=24/7+Emergency" alt="Emergency">
            <h2>24/7 Emergency</h2>
            <p>Immediate medical assistance whenever you need it.</p>
          </div>
          <div class="card">
            <img src="https://via.placeholder.com/300x180.png?text=Specialist+Doctors" alt="Doctors">
            <h2>Expert Doctors</h2>
            <p>Our team of specialists ensures top-quality care.</p>
          </div>
          <div class="card">
            <img src="https://via.placeholder.com/300x180.png?text=Advanced+Labs" alt="Labs">
            <h2>Advanced Labs</h2>
            <p>State-of-the-art facilities for accurate diagnostics.</p>
          </div>
          <div class="card">
            <img src="https://via.placeholder.com/300x180.png?text=Pharmacy" alt="Pharmacy">
            <h2>Pharmacy</h2>
            <p>On-site pharmacy for quick and reliable medicines.</p>
          </div>
        </section>
      </div>

      <!-- Footer -->
      <footer>
        <div>&copy; 2024 HealthCare 360. All rights reserved.</div>
        <div class="socials">
          <a href="#">🌐</a>
          <a href="#">📘</a>
          <a href="#">🐦</a>
          <a href="#">📷</a>
        </div>
      </footer>
    </body>
  </html>
`;

app.get('/health', (req, res) => {
  res.status(200).send(hospitalHTML);
});

app.get('/', (req, res) => {
  res.status(200).send(hospitalHTML);
});

app.listen(PORT, () => {
  console.log(`🚑 The server is running on port ${PORT} 🚑`);
});
