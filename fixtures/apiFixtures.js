const { test: base } = require('@playwright/test');
const ApiClient = require('../clients/ApiClient');
const fs = require('fs');
const path = require('path');

const test = base.extend({
  adminApi: async ({ playwright, baseURL }, use) => {
    const session = JSON.parse(fs.readFileSync(path.resolve('.auth/admin.json'), 'utf-8'));
    const context = await playwright.request.newContext({ baseURL, extraHTTPHeaders: session.extraHTTPHeaders });
    await use(new ApiClient(context));
    await context.dispose();
  },
  userApi: async ({ playwright, baseURL }, use) => {
    const session = JSON.parse(fs.readFileSync(path.resolve('.auth/user.json'), 'utf-8'));
    const context = await playwright.request.newContext({ baseURL, extraHTTPHeaders: session.extraHTTPHeaders });
    await use(new ApiClient(context));
    await context.dispose();
  }
});

module.exports = { test, expect: base.expect };