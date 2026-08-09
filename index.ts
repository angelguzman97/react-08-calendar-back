//TODO: Como no es JS, para poder usar ciertas librerias/paqutes/dependencias se tienen que importar antes de usarlos.
import express from 'express';
import dotenv from 'dotenv';
import router from './routes/auth';

// crear servidor de express
const app = express();

dotenv.config();

// Ver los procesos que estan corriendo
// console.log(process.env);
// Mostrar directorio público (HTML)
// use es como un middleware. middleware es una función que se ejecuta en el momento
// que alguien hace una petición en algún lugar
app.use(express.static('public'));

/// Rutas
// TODO: auth// crear, login, renew token
app.use('/api/auth', router);

// TODO: CRUD: Events

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});