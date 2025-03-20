import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("RECOVER_YOUR_DATA", "root", "", {
  host: "104.197.117.136",
  dialect: "mysql",
});

export default db;
