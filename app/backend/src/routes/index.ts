import * as express from 'express';

import LoginRoute from './LoginRoute';

const router = express.Router();

router.use('/login', LoginRoute)

export default router;