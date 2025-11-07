const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Award badge
router.post('/badge', async (req, res) => {
  const user = await User.findById(req.body.userId);
  user.profile.badges.push(req.body.badge);
  user.profile.xp += 10;
  await user.save();
  res.json(user);
});

// Get user gamification data
router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.json({ xp: user.profile.xp, badges: user.profile.badges });
});

module.exports = router;