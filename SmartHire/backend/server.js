const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');
const userRoutes = require('./routes/users');
const reviewRoutes = require('./routes/reviews');
const notificationRoutes = require('./routes/notifications');
const gamificationRoutes = require('./routes/gamification');
const communityRoutes = require('./routes/community');
const adminRoutes = require('./routes/admin');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/gamification', gamificationRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/admin', adminRoutes);

// Socket.io for real-time chat
io.on('connection', (socket) => {
  socket.on('joinRoom', (jobId) => socket.join(jobId));
  socket.on('sendMessage', (data) => io.to(data.jobId).emit('receiveMessage', data));
});

server.listen(5000, () => console.log('SmartHire Backend running on port 5000'));