import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import LoginMiddleware from '../middlewares/LoginMiddleware';

const router = Router();

// router.get('/');
router.post('/', LoginMiddleware.validateLogin, LoginController.login);

export default router;