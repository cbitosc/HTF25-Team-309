const express = require('express');
const User = require('../models/User');
const Job = require('../models/Job');
const router = express.Router();

// Analytics
router.get('/analytics', async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.json({ users, jobs });
});

// Manage users (placeholder)
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;