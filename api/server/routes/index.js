import Router from "express";


import {
  getALLProjetos,
  getProjetosid,
  newProjetos,
  updateProjetos,
  deleteProjetos,
} from "../controllers/projetos.js";


import {
  getALLEducacao,
  getEducacaoid,
  newEducacao,
  updateEducacao,
  deleteEducacao,
} from "../controllers/educacao.js";


import {
  getALLCertificacoes,
  getCertificacoesid,
  newCertificacoes,
  updateCertificacoes,
  deleteCertificacoes,
} from "../controllers/certificacoes.js";


const routes = Router();


routes.get("/Projeto", getALLProjetos);
routes.get("/Projeto/:id", getProjetosid);
routes.post("/newProjeto", newProjetos);
routes.post("/updateProjeto/:id", updateProjetos);
routes.delete("/deleteProjeto/:id", deleteProjetos);


routes.get("/Educacao", getALLEducacao);
routes.get("/Educacao/:id", getEducacaoid);
routes.post("/newEducacao", newEducacao);
routes.post("/updateEducacao/:id", updateEducacao);
routes.delete("/deleteEducacao/:id", deleteEducacao);


routes.get("/certificacoes", getALLCertificacoes);
routes.get("/certificacoes/:id", getCertificacoesid);
routes.post("/newcertificacoes", newCertificacoes);
routes.post("/updatecertificacoes/:id", updateCertificacoes);
routes.delete("/deletecertificacoes/:id", deleteCertificacoes);



export { routes };
