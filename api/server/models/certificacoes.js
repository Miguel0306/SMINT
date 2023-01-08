import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const CertificacoesModule = dbInstance.define("certificacoes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});
export { CertificacoesModule };
