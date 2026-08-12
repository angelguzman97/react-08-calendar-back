import { type Request, type Response } from 'express';
import { Usuario } from '../models/Usuario';

export const createUser = async (req: Request, res: Response) => {
    // const { name, email, password } = req.body;
    try {
        const usuario = new Usuario(req.body); // Crear la instancia
    
        // Guardar en la BD
        await usuario.save();
    
        res.status(201).json({
            ok: true,
            msg: 'registro'
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