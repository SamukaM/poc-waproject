const mongoose = require('mongoose');
const Association = mongoose.model('Associations');
const Exam = mongoose.model('Exam');
const Lab = mongoose.model('Laboratory')

exports.createAssociation = async (id_exam, id_lab) => {
  var exam = await Exam.findById(id_exam);
  var lab = await Lab.findById(id_lab);

  if (exam.status && lab.status) {
    var association = await Association.find({ id_exame: id_exam })

    if (association.length == 0) {
      await Association.findOneAndUpdate({ id_exame: id_exam }, {
        $set: {
          "id_exame": id_exam,
          "id_laboratorio": id_lab
        }
      }, { upsert: true })
    } else {
      await Association.findOneAndUpdate({ id_exame: id_exam }, {
        $push: {
          "id_laboratorio": id_lab
        }
      });
    };
  }
};

exports.deleteAssociation = async (id_exam, id_lab) => {
  var association = await Association.find({ id_exame: id_exam })

  var aux = association.map(object => object.id_laboratorio).flat()
  var id_compare = aux.find(e => e.toString() == id_lab)

  if (id_compare == id_lab) {
    if (aux.length > 1) {
      await Association.findOneAndUpdate({ id_exame: id_exam }, {
        $pull: {
          "id_laboratorio": id_lab
        }
      });
    } else {
      await Association.findOneAndDelete({ id_exame: id_exam });
    };
  }else{
    var err = "O id_laboratorio inserido não foi encontrado." 
    throw err;
  }
}