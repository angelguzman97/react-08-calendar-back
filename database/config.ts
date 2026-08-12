//conexion a bd
import { connect } from 'mongoose';

export const dbConnection = async () => {
    try {
        await connect(process.env.DB_CNN || '');
        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar BD')
    }
}