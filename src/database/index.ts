import { Sequelize } from "sequelize-typescript";
import { databaseConfig } from "../config/database";
import { User } from "../entities/User";

const sequelize = new Sequelize(databaseConfig);

sequelize.addModels([User])

export { sequelize };
