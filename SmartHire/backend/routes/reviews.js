const express = require('express');
const Review = require('../models/Review'); // Assume you have a Review model similar to User/Job
const router = express.Router();

// Add review
router.post('/', async (req, res) => {
  const { jobId, stars, comment } = req.body;
  const review = new Review({ jobId, stars, comment });
  await review.save();
  res.json(review);
});

// Get reviews for a job
router.get('/:jobId', async (req, res) => {
  const reviews = await Review.find({ jobId: req.params.jobId });
  res.json(reviews);
});

module.exports = router;