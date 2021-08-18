const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// APP
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE
mongoose.connect("mongodb://localhost:27017/waproject",
{ useNewUrlParser: true, useUnifiedTopology: true, })
  .then(() => {
    app.listen(3000);
    console.log("Sucesso, conectado ao MongoDB");
  }
);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose default connection is open');
});

db.on('error', err => {
  console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log(
      'Mongoose default connection is disconnected due to application termination'
    );
    process.exit(0);
  });
});

// Load Models
// const Mentions = require('./models/mentions');

// Load Routes
// const indexRoutes = require('./routes/index-routes');
// app.use('/', indexRoutes);

// const mentionsRoutes = require('./routes/mentions-routes');
// app.use('/mentions', mentionsRoutes);


module.exports = app;