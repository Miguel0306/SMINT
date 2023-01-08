import { ProjetosModule } from "../models/projetos.js";

export const getALLProjetos = async (req, res) => {
  const Projetos = await ProjetosModule.findAll({ where: {} });
  return res.send({ Projetos });
};

export const getProjetosid = async (req, res) => {
  const id = req.params.id;
  const Projetos = await ProjetosModule.findByPk(id);
  if (Projetos === null) {
    res.send("Não existe nenhum projeto com id: " + id);
  }
  res.send({ Projetos });
};

export const newProjetos = async (req, res) => {
  const newProjetos = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description
  };
  await ProjetosModule.create(newProjetos);

  res.send({ newProjetos });
};

export const updateProjetos = async (req, res) => {
  const id = req.params.id;
  const ProjetosUpdated = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description
  };
  const Projetos = await ProjetosModule.findByPk(id);
  if (Projetos !== null) {
    Projetos.update(ProjetosUpdated);
    return res.send("Projeto atualizado com sucesso");
  } else {
    return res.send("Não existe nenhum projeto com id: " + id);
  }
};

export const deleteProjetos = async (req, res) => {
  const id = req.params.id;
  const Projetos = await ProjetosModule.findByPk(id);
  if (Projetos !== null) {
    Projetos.destroy({ where: { id: id } });
    return res.send("Projeto removido com sucesso");
  } else {
    return res.send("Não existe nenhum projeto com id: " + id);
  }
};
