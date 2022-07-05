import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import LoginService from '../services/LoginService';

class LoginController {
  public  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const user = await LoginService.login(email, password);

      if(!user) return res.status(StatusCodes.BAD_REQUEST).json({message: "All fields must be filled"});

      return res.status(StatusCodes.OK).json(user);
    } catch (error) {
      next(error);
    }
  };
}

export default new LoginController();