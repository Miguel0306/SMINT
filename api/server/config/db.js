import Sequelize from "sequelize";
// CREATE USER 'miguel'@'%' IDENTIFIED BY '1234';
// GRANT ALL PRIVILEGES ON * . * TO 'miguel'@'%';
const dbInstance = new Sequelize({
  host: "localhost",
  port: 3306,
  username: "miguel",
  password: "1234",
  database: "smint",
  dialect: "mysql",
});

export { dbInstance };
