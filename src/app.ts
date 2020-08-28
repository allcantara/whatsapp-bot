import * as express from "express";
import * as cors from "cors";
import { sequelize } from "./database";
import { router } from "./routes";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.database();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes() {
    this.express.use(router);
  }

  private database() {
    sequelize.authenticate()
      .then(async () => {
        console.log("Database connected");
        try {
          await sequelize.sync({ force: true });
        } catch (error) {
          throw new Error(error.message);
        }
      })
      .catch(console.log);
  }
}
const app = new App().express;
export { app };
