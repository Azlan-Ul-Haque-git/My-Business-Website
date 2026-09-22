/**
 * AZIS DIGITAL HUB — Dev Server (server.js)
 * For local development only.
 * For production: deploy static files to Firebase Hosting.
 *
 * Usage:
 *   npm install express
 *   node server.js
 *   → http://localhost:3000
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from current directory
app.use(express.static(path.join(__dirname)));

// SPA-style fallback: all unknown routes serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n✦ Azis Digital Hub Dev Server`);
  console.log(`  Running at: http://localhost:${PORT}`);
  console.log(`  Press Ctrl+C to stop.\n`);
});
