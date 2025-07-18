const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');

// POST /api/invoices/add — Create a new invoice
router.post('/add', async (req, res) => {
  try {
    const { customerName, amount, dueDate } = req.body;

    const newInvoice = new Invoice({ customerName, amount, dueDate });
    await newInvoice.save();

    res.status(201).json({ message: 'Invoice created successfully', invoice: newInvoice });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
