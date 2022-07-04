import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import ILogin  from '../interfaces/Login.interface';

export default class LoginMiddleware {
  static validateLogin(req: Request, _res:Response, next: NextFunction) {

      const { email, password } = req.body as ILogin;

      const { error } = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
      }).validate({ email, password });

      if (error) throw error;

      return next(error);
    }
  }