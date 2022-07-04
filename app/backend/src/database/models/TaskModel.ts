import { Model, DataTypes } from 'sequelize';
import db from '.';

 class taskModel extends Model {
  id!: number;
  task!: string;
  deadline!: number;
 }

 taskModel.init({
    id: DataTypes.INTEGER,
    task: DataTypes.STRING,
    deadline: DataTypes.NUMBER
  }, {
    sequelize: db,
    underscored: true,
    modelName: 'tasks',
    timestamps: false,
  });

  export default taskModel;