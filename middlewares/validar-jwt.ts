import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
    uid: string;
    name: string;
}

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
    //para leer header es x-token. Es se quiere que sea
    const token = req.header('x-token');

    // Validar el token
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    };

    try {
        const { uid, name } = jwt.verify(
            token, process.env.SECRET_JWT_SEED || ""
        ) as JwtPayload;

        req.uid = uid;
        req.name = name;

    } catch (error) {
        return res.status(402).json({
            ok: false,
            msg: 'Token no válido'
        });
    };

    next();
}