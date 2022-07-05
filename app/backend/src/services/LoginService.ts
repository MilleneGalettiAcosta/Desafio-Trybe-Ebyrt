import userModel from '../database/models/LoginModel';
import ILogin from '../interfaces/Login.interface';
import ILoginService from './interface/LoginService';
import crypto from '../auth/Bcrypt';
import { jwtSign } from '../auth/JWT';

class LoginService implements ILoginService <ILogin | null> {
  constructor( private models = userModel ) {}

  public login = async (email:string, password:string): Promise<ILogin | null> => {
    const user = await userModel.findOne({ where: { email } });

    if (!user) return null;

    const cryptoPass = crypto(password, user.password);

    if (!cryptoPass) return null;

    const token = jwtSign({data: { id: user.id }});

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    };
  };
}

export default new LoginService;
