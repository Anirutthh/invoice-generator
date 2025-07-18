// backend/models/Invoice.js
const mongoose = require('mongoose');

// Create the schema
const invoiceSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  }
}, {
  timestamps: true, // auto-creates createdAt and updatedAt fields
});

// Create the model
const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
