/*
Rutas de usuario/auth
host + /api/auth
*/

import express from 'express';
import { check } from 'express-validator';
import { createUser, loginUser, renewToken } from '../controllers/auth';
import { validarCampos } from '../middlewares/validar-campos';

const router = express.Router();
// const nameValid = check('name', 'El nombre es obligatorio');

/// Primera ruta
// router.get('/', (req, res) => {
//     res.json({
//         ok: true
//     })
// });

router.post('/new',
    [// middlewares
        check('name', 'El nombre es obligatorio').notEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos,

    ],
    createUser);

router.post('/',
    [// middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUser);

router.get('/renew', renewToken);

export default router;