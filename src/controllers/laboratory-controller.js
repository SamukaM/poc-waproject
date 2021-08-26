const repository = require('../repositories/laboratory-repository.js');

// LIST
exports.listLaboratories = async (req, res) => {
  try {
    const data = await repository.listLaboratories();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao carregar os Laboratórios.'
    });
  }
};

// Create
exports.createLaboratory = async (req, res) => {
  try {
    await repository.createLaboratory({
      nome: req.body.nome,
      endereco: req.body.endereco,
      status: req.body.status
    });
    res.status(201).send({
      message: 'Laboratório cadastrado com sucesso!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao cadastrar o laboratório.'
    });
  }
}

// Update
exports.updateLaboratory = async (req, res) => {
  try {
    await repository.updateLaboratory(req.params.id, req.body);
    res.status(200).send({
      message: 'Laboratório atualizado com sucesso! '
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao atualizar o laboratório.'
    });
  }
};

// Delete
exports.deleteLaboratory = async (req, res) => {
  try {
    await repository.deleteLaboratory(req.params.id);
    res.status(200).send({
      message: 'Laboratório removido com sucesso!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao remover o laboratório.'
    })
  }
}