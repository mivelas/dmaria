const express = require('express');
const path = require('path');
const cors = require('cors');
const apiRoutes = require('./src/routes/api');
const config = require('./src/config');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from public/
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', apiRoutes);

// Fallback for single page app
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
  next();
});

// Central error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

const PORT = config.port;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`🧁 d'María Artisanal Bakery Server Running!`);
    console.log(`🌐 Website: http://localhost:${PORT}`);
    console.log(`===============================================`);
  });
}

module.exports = app;
