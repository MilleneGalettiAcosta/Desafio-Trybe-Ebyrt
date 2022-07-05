import * as express from 'express';
import LoginController from '../controllers/LoginController';
import validateLogin from '../middlewares/LoginMiddleware';

const loginRouter = express.Router();

// router.get('/');
loginRouter.post('/', validateLogin, LoginController.login);

export default loginRouter;