import { Whatsapp } from "venom-bot";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IMailProvider } from "../../providers/IMailProvider";
import { IBaseCreateUser } from "../Base/IBaseCreateUser";
import { CreateUserWhasapp } from "./CreateUserWhatsapp";
import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export class CreateUserUseCase implements IBaseCreateUser {
  private usersRepository: IUsersRepository;
  private mailProvider: IMailProvider;

  constructor(usersRepository: IUsersRepository, mailProvider: IMailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute(
    data: IUserAttributesDTO,
    whatsapp: Promise<Whatsapp>
  ): Promise<IUserAttributesDTO> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const createUserWhatsapp = new CreateUserWhasapp(whatsapp);
    createUserWhatsapp.sendMessageNewUser(data);

    const user = await this.usersRepository.save(data);

    await this.mailProvider.sendMail({
      to: { name: data.name, email: data.email },
      from: { name: "Equipe Observ", email: "equipe@observ.com.br" },
      subject: "Seja bem-vindo á plataforma!",
      body: `<p>Você já pode fazer login em nossa plataforma!</p>`,
    });

    return user;
  }
}
