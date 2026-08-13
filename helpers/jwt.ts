import jwt from 'jsonwebtoken';

export const generateJWT = (uid: string, name: string) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };

        // Se manda el psyload y la palabra secreta
        jwt.sign(payload, process.env.SECRET_JWT_SEED || "", {
            // duracion del token
            expiresIn: '2h'
        },
            //callback de error y exito
            (err, token) => {
                // Si existe un error
                if (err) {
                    console.log("Error log:", err);
                    reject('No se pudo generar el token');
                }

                // Si todo esta bien
                resolve(token);
            });
    });

}