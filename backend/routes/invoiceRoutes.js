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

// Get all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET /api/invoices — Get all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// DELETE /api/invoices/:id — Delete an invoice by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Invoice.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Invoice not found' });
    res.json({ message: 'Invoice deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// PUT /api/invoices/:id — Update an invoice
router.put('/:id', async (req, res) => {
  try {
    const { customerName, amount, dueDate } = req.body;
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      { customerName, amount, dueDate },
      { new: true }
    );
    if (!updatedInvoice) return res.status(404).json({ message: 'Invoice not found' });
    res.json({ message: 'Invoice updated successfully', invoice: updatedInvoice });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
