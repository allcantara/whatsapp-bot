import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { Whatsapp } from "venom-bot";

export class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(
    request: Request,
    response: Response,
    whatsapp: Promise<Whatsapp>
  ): Promise<Response> {
    try {
      const { name, email, password, telephoneNumber } = request.body;
      const user = await this.createUserUseCase.execute(
        { name, email, password, telephoneNumber },
        whatsapp
      );

      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
