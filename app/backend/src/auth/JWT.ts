import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import IToken from '../interfaces/IToken';

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const jwtConfig: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export const jwtSign = (payload: IToken): string => jwt.sign(payload, secret, jwtConfig);

export const jwtVerify = (token: string) => jwt.verify(token, secret) as IToken;