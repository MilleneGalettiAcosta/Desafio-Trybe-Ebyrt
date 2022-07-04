import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/LoginService';

class LoginController {
  public  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;

      const user = await LoginService.login(email);

      if(!user) return res.status(400).json({message: "Incorrect email"});

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}

export default new LoginController();