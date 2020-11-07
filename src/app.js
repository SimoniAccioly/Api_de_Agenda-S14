const express = require('express');
const app = express();

const cors = require('cors');

const database = require('./models/repository')

//database.connect() 
const index = require('./routes/indexRoute');
//const contatos = require('./routes/contatosRoutes');


app.use(cors());
app.use(express.json());
app.use('/', index);
//app.use('/contatos', contatos);

module.exports = app;
