const express = require('express');
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const spots = require('./api/spots.json');
const stores = require('./api/stores.json');

mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback) {
  console.log('Connection Succeeded');
});

const app = express();

app.use(express.json());

  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/spots', (req, res) => {
  res.json(spots);
});

app.get('/stores', (req, res) => {
  res.json(stores);
});

app.listen(process.env.PORT || 8081);

console.log('listen on server');


