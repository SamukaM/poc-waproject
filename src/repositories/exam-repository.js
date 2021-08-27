const mongoose = require('mongoose');
const Exam = mongoose.model('Exam');
const Lab = mongoose.model('Laboratory');
const Association = mongoose.model('Associations')


exports.listExams = async () => {
  const res = await Exam.find({ status: true });
  return res;
};

exports.findbyName = async (nome) => {
  var exam = await Exam.findOne({nome: nome});
  var id_exam = exam._id;
  var association = await Association.findOne({id_exame: id_exam})
  var lista_id_lab = association.id_laboratorio
  var lista_lab = []

  for (let i = 0; i < lista_id_lab.length; i++) {
    let e = lista_id_lab[i];
    let lab = await Lab.findById(e);
    lista_lab.push(lab);
  }
  return lista_lab;
};

exports.createExam = async data => {
  const exam = new Exam();
  exam.nome = data.nome;
  exam.tipo.push(data.tipo)
  exam.status = data.status
  await exam.save();
};

exports.updateExam = async (id, data) => {
  await Exam.findByIdAndUpdate(id, {
    $set: {
      "nome": data.nome,
      "tipo": data.tipo,
      "status": data.status
    }
  });
};

exports.deleteExam = async id => {
  await Association.findOneAndDelete({id_exame: id});
  await Exam.findByIdAndRemove(id);
};