import { Schema, model } from "mongoose";
import type { UsuarioModel } from "./Usuario.js";

export interface EventoModel extends Document {
    title: string;
    notes: string;
    start: Date;
    end: Date;
    user: UsuarioModel
}

const EventoSchema = new Schema<EventoModel>({
    title: {
        type: String,
        require: true
    },
    notes: {
        type: String,
        require: true
    },
    start: {
        type: Date,
        require: true
    },
    end: {
        type: Date,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

export const Evento = model<EventoModel>('Evento', EventoSchema);