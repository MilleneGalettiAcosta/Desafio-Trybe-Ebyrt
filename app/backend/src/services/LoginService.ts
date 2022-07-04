import userModel from '../database/models/LoginModel';
import ILogin from '../interfaces/Login.interface';
import ILoginService from './interface/LoginService';

class LoginService implements ILoginService <ILogin | null> {
  constructor( private models = userModel ) {}

  public login = async (email:string): Promise<ILogin | null> => {
    const user = await userModel.findOne({ where: { email } });

    if (!user) return null;

    return {
      email: user.email,
    }
  }
}

export default new LoginService;
