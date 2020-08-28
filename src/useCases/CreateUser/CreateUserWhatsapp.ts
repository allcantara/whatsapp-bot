import { Whatsapp } from "venom-bot";
import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export class CreateUserWhasapp {
  private whatsapp: Promise<Whatsapp>;

  constructor(whatsapp: Promise<Whatsapp>) {
    this.whatsapp = whatsapp;
  }

  sendMessageNewUser(user: IUserAttributesDTO): void {
    const message = `Olá ${user.name}, bem-vindo a nossa plataforma!`;
    this.whatsapp.then((client) => {
      client.sendMessageToId(`55${user.telephoneNumber}@c.us`, message);
    });
  }
}
