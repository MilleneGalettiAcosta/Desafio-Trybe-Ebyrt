
import type { ErrorRequestHandler } from 'express';
import { BadRequest, InternalServerError } from 'ts-http-status-codes';

const errorHandler: ErrorRequestHandler = ({ isJoi }, _req, res, _next) => {
  if (isJoi) {
    return res.status(BadRequest).json({ message: 'All fields must be filled' });
  }
  return res.status(InternalServerError).json({ message: 'Server Error' });
};

export default errorHandler;