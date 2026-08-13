import type { Request, Response } from "express";

export const getEventos = (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'Obtener eventos'
    });
};
export const createEvento = (req: Request, res: Response) => {
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