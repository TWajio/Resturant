// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001;
// Middleware
app.use(cors());
app.use(express.json());

// POST route to handle contact form
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input (optional but recommended)
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Continue to Step 2: Configure Nodemailer
  res.status(200).json({ message: 'Form received. Email will be sent in next step.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
