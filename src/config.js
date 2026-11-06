const path = require('path');

module.exports = {
  port: process.env.PORT || 3030,
  bakery: {
    name: "d'María",
    taglineEn: "Bespoke Artisanal Pastries & Cakes",
    taglineEs: "Pastelería Artesanal & Tortas Personalizadas",
    phone: "+1 (555) 382-7421",
    whatsapp: "15553827421", // format for wa.me links
    email: "pedidos@dmaria.com",
    address: "Artisanal Studio • Available by appointment & order pickup",
    addressEs: "Taller Artesanal • Disponible con cita previa y retiro de pedidos",
    hoursEn: "Orders: Tues – Sun (Pickup hours: 9:00 AM – 6:00 PM)",
    hoursEs: "Pedidos: Mar – Dom (Horario de retiro: 9:00 AM – 6:00 PM)",
    minLeadDays: 3
  },
  dataFile: path.join(__dirname, '..', 'data', 'requests.json')
};
