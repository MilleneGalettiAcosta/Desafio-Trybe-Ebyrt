import { Model, DataTypes } from 'sequelize';
import db from '.';

 class userModel extends Model {
  id!: number;
  email!: string;
  password!: string;
 }

 userModel.init({
    id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize: db,
    underscored: true,
    modelName: 'users',
    timestamps: false,
  });

  export default userModel;
