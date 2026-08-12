import { type Request, type Response } from 'express';
import { Usuario } from '../models/Usuario';

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {
        let usuario = await Usuario.findOne({ email });
        console.log(usuario);

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese email'
            });
        }

        usuario = new Usuario(req.body); // Crear la instancia

        //Guardar en la BD
        await usuario.save();

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin'
        });
    }

};

export const loginUser = (req: Request, res: Response) => {
    const { email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    });
};

export const renewToken = (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}