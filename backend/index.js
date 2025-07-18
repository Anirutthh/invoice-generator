const express = require('express');
const mongoose = require('mongoose');
const invoiceRoutes = require('./routes/invoiceRoutes');

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/invoices', invoiceRoutes); // now: /api/invoices/add

// Default route (optional)
app.get('/api/hello', (req, res) => {
  res.send('Hello from server 👋');
});

// MongoDB Connection
mongoose.connect('mongodb+srv://aniruthsriram1804:mern1234aniruth@ani-db.ryi0zma.mongodb.net/invoice_gen?retryWrites=true&w=majority&appName=Ani-db')
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
