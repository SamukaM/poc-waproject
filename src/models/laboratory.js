const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {
    type: String,
    require: true
  },
  endereco: {
    type: String,
    require:true
  },
  status: {
    type: Boolean,
    require: true
  }
});

module.exports = mongoose.model('Laboratory', schema);