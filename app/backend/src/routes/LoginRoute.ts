import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const router = Router();

// router.get('/');
router.post('/', LoginController.login);

export default router;