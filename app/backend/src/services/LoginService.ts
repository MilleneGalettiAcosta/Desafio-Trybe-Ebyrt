import userModel from '../database/models/LoginModel';

class LoginService {
  constructor( private models = userModel ) {}

  public login = async (email:string, password:string): Promise<> => {
    const user = await userModel.findOne({ where: { email } });

    if (!user) return null;

    return {
      id: user.id,
      email: user.email,
    }
  }
}
