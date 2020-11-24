// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {

    const {
        url,
    } = req.body;
    console.log('SET',{
        url,
    })
    return await db
        .collection("slider")
        .doc()
        .set(
            {
                url,
            }
        )
        .then(() => {
            console.log("Firebase 4 - Post Creado");
            res.status(200).json({ message: 'Post Creado', url })
            res.end();
        })
        .catch((error) =>
            console.log("Hubo un error creando el post", error)
        );

};