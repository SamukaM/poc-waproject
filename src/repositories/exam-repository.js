const mongoose = require('mongoose');
const Exam = mongoose.model('Exam');
const Association = mongoose.model('Associations')


exports.listExams = async () => {
  const res = await Exam.find({ status: true });
  return res;
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