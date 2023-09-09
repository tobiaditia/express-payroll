const express = require('express')
const app = express()
const request = require('supertest')

app.get('/users', function(req, res) {
    res.status(200).json({ name: 'john' });
});

test('test', async () => {
    const res = await request(app).get('users')
    expect(res.text).toBe("l")
})
  
// request(app)
//     .get('/users')
//     .expect('Content-Type', /json/)
//     .expect('Content-Length', '15')
//     .expect(200)
//     .end(function(err, res) {
//         if (err) throw err;
//     });