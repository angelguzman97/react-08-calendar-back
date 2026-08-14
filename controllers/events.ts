import type { Request, Response } from "express";
import { Evento } from "../models/Eventos.js";
import { Types } from "mongoose";

export const getEventos = (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'Obtener eventos'
    });
};
export const createEvento = async (req: Request, res: Response) => {
    // Guardar en la BD
    const evento = new Evento(req.body);

    try {
        // Para obtener el id del usuario
        evento.user = new Types.ObjectId(req.uid);

        const eventoGuardado = await evento.save();
        res.status(201).json({
            ok: true,
            evento: eventoGuardado
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }


    res.json({
        ok: true,
        msg: 'Crear evento'
    });
};
export const updateEvento = (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'Actualizar evento'
    });
};
export const deleteEvento = (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'Eliminar evento'
    });
};