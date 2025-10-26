const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  budget: Number,
  deadline: Date,
  status: { type: String, enum: ['open', 'inProgress', 'completed'], default: 'open' },
  clientId: mongoose.Schema.Types.ObjectId,
  freelancerId: mongoose.Schema.Types.ObjectId,
  bids: [{ freelancerId: mongoose.Schema.Types.ObjectId, amount: Number, message: String }],
  tasks: [{ task: String, completed: Boolean }]
});
module.exports = mongoose.model('Job', jobSchema);