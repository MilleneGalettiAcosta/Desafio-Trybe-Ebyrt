import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email().empty().required(),
  password: Joi.string().min(6).empty().required(),
});

const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const { error } = loginSchema.validate({ email, password});

  if (error) throw error;

  return next();
};

export default validateLogin; 