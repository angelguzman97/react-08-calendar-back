/*
Rutas de usuario/auth
host + /api/auth
*/

import express from 'express';

const router = express.Router();

/// Primera ruta
router.get('/', (req, res) => {
    res.json({
        ok: true
    })
});

export default router;