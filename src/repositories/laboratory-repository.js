const mongoose = require('mongoose');
const Lab = mongoose.model('Laboratory');
const Association = mongoose.model('Associations')
const repository = require('./association-repository')


exports.listLaboratories = async () => {
  const res = await Lab.find({ status: true });
  return res;
};

exports.createLaboratory = async data => {
  const laboratory = new Lab(data);
  await laboratory.save();
};

exports.updateLaboratory = async (id, data) => {
  await Lab.findByIdAndUpdate(id, {
    $set: data
  });
};

exports.deleteLaboratory = async id => {
  var query = await Association.find({ id_laboratorio: id });
  aux = query.map(object => object.id_exame).flat()

  aux.forEach(async e => {
    await repository.deleteAssociation(e, id)
  });
  await Lab.findByIdAndRemove(id);
};