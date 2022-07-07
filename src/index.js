
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./db');
const request = require('request-promise');


app.get('/', (req, res) => {
  res.send('Gotta catch em all!');
});

app.get('/api/getPokedex', async (req, res) => {
  res.sendStatus(501);
});

app.get('/api/getPokemon/:id', async (req, res) => {
  res.sendStatus(501);
});

app.post('/api/addPokemon', async (req, res) => {
  res.sendStatus(501);
});

app.get('/api/captured/:id', async (req, res) => {
  res.sendStatus(501);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});