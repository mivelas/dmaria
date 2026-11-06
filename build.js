const fs = require('node:fs');
const path = require('node:path');

const outputDir = path.join(__dirname, 'dist');

fs.rmSync(outputDir, { recursive: true, force: true });
fs.cpSync(path.join(__dirname, 'public'), outputDir, { recursive: true });
