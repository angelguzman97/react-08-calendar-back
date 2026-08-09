import { request, response } from 'express';

export const createUser = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'registro'
    });
};

export const loginUser = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'login'
    });
};

export const renewToken = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}