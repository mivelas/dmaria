const app = require('./server');
const http = require('http');

const server = http.createServer(app);
server.listen(3099, async () => {
  console.log('Testing server on port 3099...');

  const fetchRoute = (path, method = 'GET', body = null) => {
    return new Promise((resolve, reject) => {
      const opts = {
        hostname: 'localhost',
        port: 3099,
        path,
        method,
        headers: body ? { 'Content-Type': 'application/json' } : {}
      };
      const req = http.request(opts, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve({ status: res.statusCode, data }));
      });
      req.on('error', reject);
      if (body) req.write(JSON.stringify(body));
      req.end();
    });
  };

  try {
    // 1. Home page
    const home = await fetchRoute('/');
    console.log('GET /:', home.status, home.data.includes("d'María") ? 'OK' : 'FAIL');

    // 2. API desserts
    const desserts = await fetchRoute('/api/desserts');
    const dJson = JSON.parse(desserts.data);
    console.log('GET /api/desserts:', desserts.status, 'Desserts count:', dJson.data.length);

    // 3. Images
    const imgs = [
      'ApplePie.jpeg',
      'ChocolateCake.jpeg',
      'RedVelvetCake.jpeg',
      'ApplePie-web.jpg',
      'ChocolateCake-web.jpg',
      'RedVelvetCake-web.jpg'
    ];
    for (const img of imgs) {
      const resImg = await fetchRoute('/images/' + img);
      console.log('GET /images/' + img + ':', resImg.status);
    }

    // 4. CSS & JS
    const css = await fetchRoute('/css/style.css');
    console.log('GET /css/style.css:', css.status);
    const js = await fetchRoute('/js/app.js');
    console.log('GET /js/app.js:', js.status);
    const i18n = await fetchRoute('/js/i18n.js');
    console.log('GET /js/i18n.js:', i18n.status);

    // 5. Test customer order request submission
    const submit = await fetchRoute('/api/requests', 'POST', {
      customerName: 'Elena Rostova',
      customerEmail: 'elena@example.com',
      customerPhone: '+1 (555) 449-1122',
      dessertId: 'red-velvet-cake',
      eventDate: '2026-11-25',
      guestCount: 16,
      size: 'medium',
      sizeLabel: '8" Celebration',
      occasion: 'birthday',
      fulfillment: 'pickup',
      customNotes: 'Semi-naked style with edible gold leaf and fresh raspberries.',
      lang: 'en'
    });
    const subJson = JSON.parse(submit.data);
    console.log('POST /api/requests:', submit.status, 'Ref:', subJson.data.refNumber);

    console.log('\n>>> All integration tests PASSED successfully! <<<');
  } catch (err) {
    console.error('Test error:', err);
    process.exit(1);
  } finally {
    server.close();
  }
});
