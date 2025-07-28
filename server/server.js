// server.js
// This single file sets up a Node.js server using Express and Nodemailer
// to send emails. It now uses environment variables for security.

// --- Dependencies ---
// To run this, you need to install Express, Nodemailer, cors, and dotenv:
// npm install express nodemailer cors dotenv

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Load environment variables from a .env file into process.env
require('dotenv').config();

// --- Configuration ---
const app = express();
const PORT = process.env.PORT || 3001; // Use port 3001 or one defined in environment variables

// --- Middleware ---
// Enable CORS (Cross-Origin Resource Sharing) to allow your Vite app (on a different origin)
// to make requests to this server.
app.use(cors());
// Enable the express server to parse JSON formatted request bodies.
app.use(express.json());


// --- Nodemailer Transporter Setup ---
// You need to configure this with the SMTP settings of your email provider
// (e.g., GoDaddy for info@risin.ventures).
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // <-- Set SMTP_HOST in your .env file (e.g., smtp.secureserver.net)
  port: process.env.SMTP_PORT, // <-- Set SMTP_PORT in your .env file (e.g., 465)
  secure: true,                // `true` for port 465, `false` for other ports like 587 (TLS)
  auth: {
    user: process.env.EMAIL_USER, // <-- Set EMAIL_USER in your .env file (info@risin.ventures)
    pass: process.env.EMAIL_PASS  // <-- Set EMAIL_PASS in your .env file
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
});

// --- API Endpoints ---

// Root endpoint to check if the server is running
app.get('/', (req, res) => {
  res.status(200).send('Welcome to AI Summit Server');
});

// API Endpoint for Newsletter Subscription
// Your Vite application will make a POST request to this '/send-email' endpoint
// with a body like: { "recipient": "new.subscriber@example.com" }
app.post('/send-email', async (req, res) => {
  // Get the new subscriber's email from the request body
  const { recipient } = req.body;

  // Basic validation
  if (!recipient) {
    return res.status(400).json({ success: false, message: 'Missing required field: recipient' });
  }
  
  // Check if server credentials are set
  if (!process.env.EMAIL_PASS || !process.env.EMAIL_USER) {
      console.error('Error: Email credentials not set in .env file.');
      return res.status(500).json({ success: false, message: 'Server configuration error.' });
  }

  // --- Email 1: Welcome Email to the New Subscriber ---
  const mailOptionsUser = {
    from: `"AI Summit & AI Hack" <${process.env.EMAIL_USER}>`,
    to: recipient,
    subject: 'Welcome! You are now subscribed to our newsletter.',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #4A90E2;">Thank You for Subscribing!</h2>
        <p>Hello,</p>
        <p>Welcome to the official newsletter for the AI Summit & AI Hack, powered by Risin Ventures. We're thrilled to have you with us.</p>
        <p>You can look forward to receiving the latest news, expert insights, event updates, and exclusive content directly in your inbox.</p>
        <p>Stay tuned for exciting announcements!</p>
        <br>
        <p>Best regards,</p>
        <p><strong>The AI Summit & AI Hack Team</strong></p>
      </div>
    `
  };

  // --- Email 2: Notification Email to the Admin ---
  const mailOptionsAdmin = {
    from: `"Website Notification" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Sending the notification to yourself
    subject: '🚀 New Newsletter Subscriber!',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>New Subscriber Alert</h2>
        <p>A new user has subscribed to the newsletter through the website.</p>
        <p><strong>Email Address:</strong> ${recipient}</p>
        <p>This notification was sent automatically.</p>
      </div>
    `
  };

  try {
    // Send both emails. We use 'await' to ensure one completes before the next.
    console.log(`Attempting to send welcome email to ${recipient}...`);
    await transporter.sendMail(mailOptionsUser);
    console.log('Welcome email sent successfully.');

    console.log(`Attempting to send admin notification...`);
    await transporter.sendMail(mailOptionsAdmin);
    console.log('Admin notification sent successfully.');
    
    // If both emails are sent successfully, return a success response.
    res.status(200).json({ success: true, message: 'Subscription successful! Emails sent.' });

  } catch (error) {
    console.error('Error sending one of the emails:', error);
    // If either email fails, return an error response.
    res.status(500).json({ success: false, message: 'Failed to process subscription.', error: error.message });
  }
});


// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`📧 Server is running on http://localhost:${PORT}`);
  console.log(`Navigate to http://localhost:${PORT} in a browser to see the welcome message.`);
  console.log('Waiting for POST requests to /send-email...');
});

// === HOW TO RUN THIS SERVER ===
// 1. Your frontend should now send a POST request to http://localhost:3001/send-email
//    with a JSON body like: { "recipient": "the-users-email@domain.com" }
// 2. Ensure your .env file is correctly set up with your SMTP credentials.
