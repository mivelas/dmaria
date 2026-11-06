const fs = require('node:fs');
const path = require('node:path');
const desserts = require('./src/data/desserts');
const { bakery } = require('./src/config');

const outputDir = path.join(__dirname, 'dist');

fs.rmSync(outputDir, { recursive: true, force: true });
fs.cpSync(path.join(__dirname, 'public'), outputDir, { recursive: true });
fs.mkdirSync(path.join(outputDir, 'data'), { recursive: true });

const publicData = {
  desserts: { success: true, data: desserts },
  info: {
    success: true,
    data: {
      name: bakery.name,
      taglineEn: bakery.taglineEn,
      taglineEs: bakery.taglineEs,
      phone: bakery.phone,
      whatsapp: bakery.whatsapp,
      email: bakery.email,
      address: bakery.address,
      addressEs: bakery.addressEs,
      hoursEn: bakery.hoursEn,
      hoursEs: bakery.hoursEs,
      minLeadDays: bakery.minLeadDays
    }
  }
};

for (const [fileName, data] of Object.entries(publicData)) {
  fs.writeFileSync(
    path.join(outputDir, 'data', `${fileName}.json`),
    `${JSON.stringify(data)}\n`
  );
}
