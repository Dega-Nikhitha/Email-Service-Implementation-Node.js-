const express = require('express');
const MockProviderA = require('./providers/MockProviderA');
const MockProviderB = require('./providers/MockProviderB');
const EmailService = require('./services/EmailService');

const app = express();
app.use(express.json());

const service = new EmailService([new MockProviderA(), new MockProviderB()]);

app.post('/send', async (req, res) => {
  const result = await service.send(req.body);
  res.send({ result });
});

app.listen(3000, () => {
  console.log('EmailService running on http://localhost:3000');
});