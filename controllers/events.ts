import type { Request, Response } from "express";
import { Evento } from "../models/Eventos.js";
import { Types } from "mongoose";

export const getEventos = async (req: Request, res: Response) => {
    const eventos = await Evento.find()
        .populate('user', 'name'); // para indicar que informacion se requiere del atributo, en este caso del user se requiere el id y el name

    res.json({
        ok: true,
        eventos
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

};
export const updateEvento = async (req: Request, res: Response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Evento.findById(eventoId);

        if (!evento) {
            res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        };

        console.log(evento?.user.toString());
        console.log(uid);


        if (evento?.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        };

        const newEvent = {
            ...req.body,
            user: uid
        };

        const eventoActualizado = await Evento.findByIdAndUpdate(
            eventoId, // id de lo que se va a actualizar
            newEvent, // la data actualizada
            { new: true } // mostrar los datos actualizado
        )
            .populate('user', 'name');


        res.status(201).json({
            ok: true,
            evento: eventoActualizado
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
        msg: 'Actualizar evento'
    });
};
export const deleteEvento = (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: 'Eliminar evento'
    });
};