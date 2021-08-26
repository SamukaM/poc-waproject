const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoExame = new Schema({
  analise_clinica: {
    type: String,
    require: true
  },
  imagem: {
    type: String,
    require: true
  }
}, { _id : false });

const schema = new Schema({
  nome: {
    type: String,
    require: true
  },
  tipo: {
    type: [TipoExame]
  },
  status: {
    type: Boolean,
    require: true
  }
});

module.exports = mongoose.model('Exam', schema);