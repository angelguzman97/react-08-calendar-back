import { Schema, Types, model } from "mongoose";
export interface EventoModel extends Document {
    title: string;
    notes: string;
    start: Date;
    end: Date;
    user: Types.ObjectId;
}

const EventoSchema = new Schema<EventoModel>({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

EventoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject(); // Se extraen los
    return {
        id: _id, // cambiar el atributo de la bd
        ...object
    };
});

export const Evento = model<EventoModel>('Evento', EventoSchema);