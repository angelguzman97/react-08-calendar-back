//TODO: Como no es JS, para poder usar ciertas librerias/paqutes/dependencias se tienen que importar antes de usarlos.
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/auth.js';
import routerEvent from './routes/events.js';
import { dbConnection } from './database/config.js';

dotenv.config(); // Debe estar por encima de todos para conectarse a la bd

// crear servidor de express
const app = express();

// BD
dbConnection();

// CORS
app.use(cors());

// Ver los procesos que estan corriendo
// console.log(process.env);
// Mostrar directorio público (HTML)
// use es como un middleware. middleware es una función que se ejecuta en el momento
// que alguien hace una petición en algún lugar
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

/// Rutas
// TODO: auth// crear, login, renew token
app.use('/api/auth', router);

// TODO: CRUD: Events
app.use('/api/events', routerEvent);

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});