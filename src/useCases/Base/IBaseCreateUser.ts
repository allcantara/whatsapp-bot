import { Whatsapp } from "venom-bot";
import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";

export interface IBaseCreateUser {
  execute(data: IUserAttributesDTO, whatsapp: Promise<Whatsapp>): Promise<IUserAttributesDTO>;
}
