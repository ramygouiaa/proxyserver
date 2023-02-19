const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = 'https://ethereumencryptionservice.onrender.com/';

app.use(cors());

app.get('*', async (req, res) => {
  try {
    const { data } = await axios.get(`${API_URL}${req.originalUrl}`);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(error.response.status || 500).send(error.message);
  }
});

app.post('*', async (req, res) => {
  try {
    const { data } = await axios.post(`${API_URL}${req.originalUrl}`, req.body);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(error.response.status || 500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});