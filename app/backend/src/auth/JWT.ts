import * as jwt from 'jsonwebtoken';
import IToken from '../interfaces/Token';

const secret: string = process.env.SECRET as string;

const jwtConfig: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export const jwtSign = (payload:IToken): string => jwt.sign(payload, secret, jwtConfig);

export const jwtVerify = (token: string) => jwt.verify(token, secret) as IToken;