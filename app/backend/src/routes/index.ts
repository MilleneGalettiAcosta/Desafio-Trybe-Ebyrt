import * as express from 'express';
import loginRouter from './LoginRoute';

const router = express.Router();

router.use('/login', loginRouter)

export default router;