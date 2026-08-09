//TODO: Como no es JS, para poder usar ciertas librerias/paqutes/dependencias se tienen que importar antes de usarlos.
import express from 'express';
import dotenv from 'dotenv';

// crear servidor de express
const app = express();

dotenv.config();

// Ver los procesos que estan corriendo
// console.log(process.env);


/// Primera ruta
// app.get('/', (req, res) => {
//     res.json({
//         ok: true
//     })

// });

// Mostrar directorio público (HTML)
// use es como un middleware. middleware es una función que se ejecuta en el momento
// que alguien hace una petición en algún lugar
app.use(express.static('public'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});