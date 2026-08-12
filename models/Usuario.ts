import { Schema, model } from "mongoose";

export interface UsuarioModel extends Document {
    name: string;
    email: string;
    password: string;
}

const UsuarioSchema = new Schema<UsuarioModel>({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

export const Usuario = model<UsuarioModel>('Usuario', UsuarioSchema);