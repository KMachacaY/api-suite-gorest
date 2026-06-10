const { test, expect } = require('../fixtures/apiFixtures');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const fs = require('fs');
const path = require('path');

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validateUser = ajv.compile(JSON.parse(fs.readFileSync('schemas/user.schema.json', 'utf-8')));
const sharedIdPath = path.resolve('.auth/shared_id.txt');

test.describe('GoREST Enterprise Suite', () => {
  test('[Admin] POST /users - Create new user successfully', async ({ adminApi }) => {
    test.skip(test.info().project.name !== 'Admin-Tests');
    const { status, body } = await adminApi.users.create({ 
      name: "John Doe", gender: "male", email: `john${Date.now()}@test.com`, status: "active" 
    });
    expect(status).toBe(201);
    fs.writeFileSync(sharedIdPath, body.id.toString());
  });

  test('[Admin] GET /users - Validate schema contract integrity', async ({ adminApi }) => {
    test.skip(test.info().project.name !== 'Admin-Tests');
    const { body } = await adminApi.users.create({ 
      name: "Jane Doe", gender: "female", email: `jane${Date.now()}@test.com`, status: "active" 
    });
    expect(validateUser(body)).toBe(true);
  });

  test('[Admin] GET /users/{id} - Verify resource persistence', async ({ adminApi }) => {
    test.skip(test.info().project.name !== 'Admin-Tests');
    const id = fs.readFileSync(sharedIdPath, 'utf8');
    expect(await adminApi.users.get(id)).toBe(200);
  });
});