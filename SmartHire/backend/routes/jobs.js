const express = require('express');
const Job = require('../models/Job');
const User = require('../models/User');
const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const router = express.Router();

// Post job with AI summarization
router.post('/', async (req, res) => {
  const { title, description, ...jobData } = req.body;
  const summarizedDesc = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: `Summarize this job description: ${description}` }]
  });
  const job = new Job({ ...jobData, description: summarizedDesc.choices[0].message.content });
  await job.save();
  res.json(job);
});

// Browse jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find({ status: 'open' });
  res.json(jobs);
});

// Claim job
router.post('/:id/claim', async (req, res) => {
  const job = await Job.findById(req.params.id);
  job.freelancerId = req.body.freelancerId;
  job.status = 'inProgress';
  await job.save();
  res.json(job);
});

// AI matching
router.get('/match/:jobId', async (req, res) => {
  const job = await Job.findById(req.params.jobId);
  const freelancers = await User.find({ role: 'freelancer' });
  const matches = freelancers.filter(f => f.profile.skills.includes(job.category));
  res.json(matches);
});

module.exports = router;