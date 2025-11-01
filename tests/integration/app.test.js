const request = require('supertest');
const app = require('../../src/index');

describe('GET /sum', () => {
  it('returns correct sum', async () => {
    const res = await request(app).get('/sum?a=4&b=6');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(10);
  });
});
