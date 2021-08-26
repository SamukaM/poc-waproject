const repository = require('../repositories/exam-repository.js');

// LIST
exports.listExams = async (req, res) => {
  try {
    const data = await repository.listExams();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao carregar os Exames.'
    });
  }
};

// CREATE
exports.createExam = async (req, res) => {
  try {
    await repository.createExam({
      nome: req.body.nome,
      tipo: req.body.tipo,
      status: req.body.status
    });
    res.status(201).send({
      message: 'Exame cadastrado com sucesso!'
    })
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao cadastrar o Exame.',
      err: error
    });
  }
};

// UPDATE
exports.updateExam = async (req, res) => {
  try {
    await repository.updateExam(req.params.id, req.body);
    res.status(200).send({
      message: 'Exame atualizado com sucesso!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao atualizar Exame.'
    });
  }
};

// DELETE
exports.deleteExam = async (req, res) => {
  try {
    await repository.deleteExam(req.params.id);
    res.status(200).send({
      message: 'Exame e associação removidos com sucesso!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao remover o Exame e suas associações.'
    })
  }
}