import { IUserAttributesDTO } from "../dtos/UserAttributesDTO";

export interface IUsersRepository {
  findByEmail(email: string): Promise<IUserAttributesDTO | null>;
  save(user: IUserAttributesDTO): Promise<IUserAttributesDTO>;
}
