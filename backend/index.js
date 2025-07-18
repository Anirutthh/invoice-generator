const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/hello', (req, res) => {
  res.send('Hello from server 👋');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aniruthsriram1804:mern1234aniruth@ani-db.ryi0zma.mongodb.net/invoice_gen?retryWrites=true&w=majority&appName=Ani-db')
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

