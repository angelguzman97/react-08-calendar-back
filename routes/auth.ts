/*
Rutas de usuario/auth
host + /api/auth
*/

import express from 'express';
import { createUser, loginUser, renewToken } from '../controllers/auth';

const router = express.Router();

/// Primera ruta
// router.get('/', (req, res) => {
//     res.json({
//         ok: true
//     })
// });

router.post('/new', createUser);

router.post('/', loginUser);

router.get('/renew', renewToken);

export default router;