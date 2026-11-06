const fs = require('fs');
const path = require('path');
const config = require('./config');

const DATA_DIR = path.dirname(config.dataFile);

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(config.dataFile)) {
    fs.writeFileSync(config.dataFile, JSON.stringify([], null, 2), 'utf-8');
  }
}

function readAll() {
  ensureFile();
  try {
    const raw = fs.readFileSync(config.dataFile, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading requests file:', err);
    return [];
  }
}

function writeAll(data) {
  ensureFile();
  fs.writeFileSync(config.dataFile, JSON.stringify(data, null, 2), 'utf-8');
}

function generateRef() {
  const num = Math.floor(1000 + Math.random() * 9000);
  const year = new Date().getFullYear();
  return `DM-${year}-${num}`;
}

const storage = {
  create(data) {
    const items = readAll();
    const newRequest = {
      id: `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      refNumber: generateRef(),
      createdAt: new Date().toISOString(),
      customerName: (data.customerName || data.name || '').trim(),
      customerEmail: (data.customerEmail || data.email || '').trim().toLowerCase(),
      customerPhone: (data.customerPhone || data.phone || '').trim(),
      preferredContact: data.preferredContact || data.preferred_contact || 'whatsapp',
      dessertId: data.dessertId || data.dessert || 'apple-pie',
      dessertName: data.dessertName || 'Bespoke Dessert',
      size: data.size || 'standard',
      sizeLabel: data.sizeLabel || '',
      guestCount: parseInt(data.guestCount || data.guests, 10) || null,
      eventDate: data.eventDate || data.date || '',
      occasion: data.occasion || 'other',
      occasionLabel: data.occasionLabel || data.occasion || 'Celebration',
      fulfillment: data.fulfillment || 'pickup',
      customNotes: (data.customNotes || data.custom_notes || '').trim(),
      dietaryNotes: (data.dietaryNotes || data.dietary_notes || '').trim(),
      lang: data.lang || 'en'
    };

    items.unshift(newRequest);
    writeAll(items);
    return newRequest;
  }
};

module.exports = storage;
