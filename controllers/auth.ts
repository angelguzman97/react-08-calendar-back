import { request, response } from 'express';
import { validationResult } from 'express-validator';

export const createUser = (req = request, res = response) => {
    const { name, email, password } = req.body;

    // Manejo de errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped() // para serializar los errores
        });
    }

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    });
};

export const loginUser = (req = request, res = response) => {
    const { email, password } = req.body;

    // Manejo de errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped() // para serializar los errores
        });
    }

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    });
};

export const renewToken = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}