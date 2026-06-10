const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  reporter: [['html', { open: 'never' }], ['junit', { outputFile: 'results.xml' }]],
  use: {
    baseURL: process.env.API_BASE_URL,
    extraHTTPHeaders: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  },
  projects: [
    { name: 'setup', testMatch: /auth\.setup\.js/ },
    { name: 'Admin-Tests', dependencies: ['setup'], testMatch: /.*\.spec\.js/ },
    { name: 'Standard-User-Tests', dependencies: ['setup'], testMatch: /.*\.spec\.js/ }
  ],
});