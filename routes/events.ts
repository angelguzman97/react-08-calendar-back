
//Todas tiene que pasar por la validación del jwt

import express from "express";
import { createEvento, deleteEvento, getEventos, updateEvento } from "../controllers/events.js";
import { validateJWT } from "../middlewares/validar-jwt.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";

const routerEvent: express.Router = express.Router();

//Para validar el token a cada peticion sin necesidad de duplicar codigo
// Debe ir por encima de todos, en caso que una ruta sea publica se pone debajo de esa ruta o rutas
routerEvent.use(validateJWT);

// obtener eventos
routerEvent.get('/', getEventos);

// crear evento
routerEvent.post('/', [
    check('title', 'El titulo es obligatorio').notEmpty(),
    check('start', 'El fecha de inicio es obligatorio').isDate(),
    check('end', 'El fecha de finalización es obligatorio').isDate(),
    
    validarCampos
],
    createEvento);

// actualizar evento
routerEvent.put('/:id', updateEvento);

// borrar evento
routerEvent.delete('/:id', deleteEvento);

export default routerEvent;