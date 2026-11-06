const express = require('express');
const router = express.Router();
const desserts = require('../data/desserts');
const storage = require('../storage');
const config = require('../config');

// Public endpoint: Get dessert showcase items
router.get('/desserts', (req, res) => {
  res.json({
    success: true,
    data: desserts
  });
});

// Public endpoint: Get bakery general public info
router.get('/info', (req, res) => {
  res.json({
    success: true,
    data: {
      name: config.bakery.name,
      taglineEn: config.bakery.taglineEn,
      taglineEs: config.bakery.taglineEs,
      phone: config.bakery.phone,
      whatsapp: config.bakery.whatsapp,
      email: config.bakery.email,
      address: config.bakery.address,
      addressEs: config.bakery.addressEs,
      hoursEn: config.bakery.hoursEn,
      hoursEs: config.bakery.hoursEs,
      minLeadDays: config.bakery.minLeadDays
    }
  });
});

// Public endpoint: Submit a personalized order request
router.post('/requests', (req, res) => {
  const { customerName, customerEmail, customerPhone, dessertId, eventDate } = req.body;

  // Validation
  if (!customerName || customerName.trim().length < 2) {
    return res.status(400).json({
      success: false,
      error: 'Please provide your name / Por favor ingrese su nombre.'
    });
  }

  if (!customerEmail || !customerEmail.includes('@')) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address / Por favor ingrese un correo válido.'
    });
  }

  if (!customerPhone || customerPhone.trim().length < 6) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a contact phone number / Por favor ingrese un teléfono de contacto.'
    });
  }

  if (!eventDate) {
    return res.status(400).json({
      success: false,
      error: 'Please select your celebration date / Por favor seleccione la fecha del evento.'
    });
  }

  // Lookup dessert name if available
  const matchedDessert = desserts.find((d) => d.id === dessertId);
  const lang = req.body.lang === 'es' ? 'es' : 'en';
  const dessertName = matchedDessert
    ? (lang === 'es' ? matchedDessert.nameEs : matchedDessert.nameEn)
    : (req.body.dessertName || 'Bespoke Custom Cake');

  try {
    const requestItem = storage.create({
      ...req.body,
      dessertName
    });

    res.status(201).json({
      success: true,
      message: 'Request submitted successfully / Pedido recibido con éxito',
      data: requestItem
    });
  } catch (err) {
    console.error('Error creating request:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to process request. Please try again or message us directly.'
    });
  }
});

module.exports = router;
