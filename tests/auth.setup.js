const { test: setup } = require('@playwright/test');
const fs = require('fs');

setup('Authenticate roles', async () => {
  fs.mkdirSync('.auth', { recursive: true });
  fs.writeFileSync('.auth/admin.json', JSON.stringify({ extraHTTPHeaders: { 'Authorization': `Bearer ${process.env.GOREST_TOKEN}` } }));
  fs.writeFileSync('.auth/user.json', JSON.stringify({ extraHTTPHeaders: { 'Authorization': 'Bearer invalid' } }));
});