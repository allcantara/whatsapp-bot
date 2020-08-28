import { IUserAttributesDTO } from "../../dtos/UserAttributesDTO";
import {
  Table,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
  Model,
} from "sequelize-typescript";

@Table({ tableName: "tb_users", timestamps: true })
class User
  extends Model<IUserAttributesDTO, Omit<IUserAttributesDTO, "_id">>
  implements IUserAttributesDTO {
  @PrimaryKey
  @Column
  public readonly id?: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  public name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  public email!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  public password!: string;

  @Column
  public telephoneNumber!: string;

}

export { User };
