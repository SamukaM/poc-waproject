const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exam = mongoose.model('Exam');
const Lab = mongoose.model('Laboratory')

const schema = new Schema({
  id_exame: {
    type: Schema.Types.ObjectId,
    ref: 'Exam'
  },
  id_laboratorio: [{
    type: Schema.Types.ObjectId,
    ref: 'Laboratory'
  }]
});

module.exports = mongoose.model('Associations', schema);