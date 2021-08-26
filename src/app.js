const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// APP
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true
});

// mongoose.connect("mongodb://localhost:27017/waproject",
// { useNewUrlParser: true, useUnifiedTopology: true, })
//   .then(() => {
//     app.listen(3000);
//     console.log("Sucesso, conectado ao MongoDB");
//   }
// );

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
const Lab = require('./models/laboratory');
const Exam = require('./models/exam');
const Association = require('./models/association');

// Load Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const laboratoryRoutes = require('./routes/laboratory-routes');
app.use('/laboratory', laboratoryRoutes);

const examRoutes = require('./routes/exam-routes');
app.use('/exam', examRoutes);

const associationRoutes = require('./routes/association-routes');
app.use('/association', associationRoutes);


module.exports = app;