import { Router } from 'express';
import { getLogin, accesLogin } from '../controllers/login.controller.js';

const router = Router();

router.post('/', accesLogin);
router.get('/', getLogin);

export default router;
