const express = require('express');
const router = express.Router();

// Placeholder for community posts
let posts = [{ title: 'Freelance Tips', content: 'Share your best practices here!' }];

// Get posts
router.get('/posts', (req, res) => {
  res.json(posts);
});

// Add post
router.post('/posts', (req, res) => {
  const { title, content } = req.body;
  posts.push({ title, content });
  res.json({ message: 'Post added' });
});

module.exports = router;