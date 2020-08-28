import { Router } from "express";
import { whatsapp } from "./client";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response, whatsapp);
});

export { router };
