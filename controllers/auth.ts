import { request, response } from 'express';

export const createUser = (req = request, res = response) => {
    const { name, email, password } = req.body;

    if(name.length < 5){
        return res.status(400).json({
            ok: false,
            msg: 'el nombre debe ser mayor a 5 letras'
        });
    }

    res.status(200).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    });
};

export const loginUser = (req = request, res = response) => {
    const { email, password } = req.body;
    res.json({
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