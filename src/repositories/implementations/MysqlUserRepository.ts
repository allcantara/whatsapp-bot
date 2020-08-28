import { uuid } from "uuidv4";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export class PostgresUserRepository implements IUsersRepository {
  private users = User;

  async findByEmail(email: string): Promise<IUserAttributesDTO | null> {
    const user = this.users.findOne({ where: { email } });
    return user;
  }

  async save(user: IUserAttributesDTO): Promise<IUserAttributesDTO> {
    user.id = uuid();
    const newUser = await this.users.create(user);
    return newUser;
  }
}
