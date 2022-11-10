const express = require('express');
const app = express();

const db = require('./models/db');

app.get('/', async (req, res) => {
    res.send('Página inicial');
});

app.listen(3333, () => {
    console.log('Servidor iniciado na porta 3333: http://localhost:3333');
});
