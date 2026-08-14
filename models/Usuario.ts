import { Schema, model } from "mongoose";

export interface UsuarioModel extends Document {
    name: string;
    email: string;
    password: string;
}

const UsuarioSchema = new Schema<UsuarioModel>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export const Usuario = model<UsuarioModel>('Usuario', UsuarioSchema);