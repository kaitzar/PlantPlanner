const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool(config);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/allplants', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM plants');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
