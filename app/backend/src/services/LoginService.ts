import userModel from '../database/models/LoginModel';
import ILogin from '../interfaces/Login.interface';
import ILoginService from './interface/LoginService';
import crypto from '../auth/Bcrypt';

class LoginService implements ILoginService <ILogin | null> {
  constructor( private models = userModel ) {}

  public login = async (email:string, password:string): Promise<ILogin | null> => {
    const user = await userModel.findOne({ where: { email } });

    if (!user) return null;

    const cryptoPass = crypto(password, user.password)

    return {
      email: user.email,
    }
  }
}

export default new LoginService;
