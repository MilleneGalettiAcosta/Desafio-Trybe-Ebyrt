import userModel from '../database/models/LoginModel';
import IUser from '../interfaces/User.interface';
import ILoginService from './interface/LoginService';

class LoginService implements ILoginService <IUser | null> {
  constructor( private models = userModel ) {}

  public login = async (email:string): Promise<IUser | null> => {
    const user = await userModel.findOne({ where: { email } });

    if (!user) return null;

    return {
      id: user.id,
      email: user.email,
    }
  }
}

export default new LoginService;
