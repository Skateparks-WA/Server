'use strict';

//==========dependencies==========//
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const ATLAS = process.env.ATLAS;
const PORT = process.env.PORT || 3002;
app.use(cors());
app.use(express.json());

//==========mongoose set up==========/
const mongoose = require('mongoose');
mongoose.connect(`${ATLAS}`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});

//========routes========//
app.get('/',(request, response) => {
  response.send('server is live');
});
  

app.listen(PORT, () => console.log(`listening on ${PORT}`));
