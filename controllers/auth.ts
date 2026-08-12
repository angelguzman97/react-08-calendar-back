import { type Request, type Response } from 'express';
import bcrypt from 'bcryptjs';
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
        };

        usuario = new Usuario(req.body); // Crear la instancia

        // Encriptar password
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

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

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Verificar si existe el usuario
        let usuario = await Usuario.findOne({ email });
        console.log(usuario);

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            });
        };

        // Confirmar password
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incoreccto'
            });
        };

        // Generar JWT

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