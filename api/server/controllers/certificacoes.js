import { CertificacoesModule } from "../models/certificacoes.js";

export const getALLCertificacoes = async (req, res) => {
  const Certificacoes = await CertificacoesModule.findAll({ where: {} });
  return res.send({ Certificacoes });
};

export const getCertificacoesid = async (req, res) => {
  const id = req.params.id;
  const Certificacoes = await CertificacoesModule.findByPk(id);
  if (Certificacoes === null) {
    res.send("Não existe nenhuma certificação com id: " + id);
  }
  res.send({ Certificacoes });
};

export const newCertificacoes = async (req, res) => {
  const newCertificacoes = {
    id: req.body.id,
    title: req.body.title
  };
  await CertificacoesModule.create(newCertificacoes);

  res.send({ newCertificacoes });
};

export const updateCertificacoes = async (req, res) => {
  const id = req.params.id;
  const CertificacoesUpdated = {
    id: req.body.id,
    title: req.body.title
  };
  const Certificacoes = await CertificacoesModule.findByPk(id);
  if (Certificacoes !== null) {
    Certificacoes.update(CertificacoesUpdated);
    return res.send("Certificação  atualizada com sucesso");
  } else {
    return res.send("Não existe nenhuma certificação com id: " + id);
  }
};

export const deleteCertificacoes = async (req, res) => {
  const id = req.params.id;
  const Certificacoes = await CertificacoesModule.findByPk(id);
  if (Certificacoes !== null) {
    Certificacoes.destroy({ where: { id: id } });
    return res.send("Certificação  removida");
  } else {
    return res.send("Não existe nenhuma certificação com id: " + id);
  }
};
