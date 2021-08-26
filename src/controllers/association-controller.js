const repository = require('../repositories/association-repository.js');

// Create and Update
exports.createAssociation = async (req, res) => {
  try {
    await repository.createAssociation(
      req.body.id_exame,
      req.body.id_laboratorio
    );
    res.status(201).send({
      message: 'Associação criada com sucesso!'
    })
  } catch (error) {
    res.status(500).send({
      message:'Falha ao criar associação.'
    })
  }
}

exports.deleteAssociation = async (req, res) => {
  try {
    await repository.deleteAssociation(
      req.body.id_exame,
      req.body.id_laboratorio
    );
    res.status(201).send({
      message: 'Associação excluida com sucesso!'
    })
  } catch (error) {
    res.status(500).send({
      message:'Falha ao excluir associação.'
    })
  }
}