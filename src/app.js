const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
var util = require('util');

// APP
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE
var db_user = process.env.DATABASE_USER;
var db_pass = process.env.DATABASE_PASSWORD;
var db_host_name = process.env.DATABASE_HOST_NAME;
var db_port = process.env.DATABASE_PORT;

const DB_CONFIG = util.format('mongodb://%s:%s@%s:%s', db_user, db_pass, db_host_name, db_port);

mongoose.connect(DB_CONFIG, {useNewUrlParser: true}, (err) => {
    console.log('mongodb connected', err);
});

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