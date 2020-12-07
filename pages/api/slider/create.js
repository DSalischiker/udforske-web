// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {

    const {
        user_id, //string
        url,
        alt,
    } = req.body;
    console.log('SET',{
        user_id, //string
        url,
        alt,
    })
    return await db
        .collection("slider")
        .doc()
        .set(
            {
                user_id, //string
                url,
                alt,
            }
        )
        .then(() => {
            console.log("Firebase 4 - Post Creado");
            res.status(200).json({ message: 'Post Creado', alt })
            res.end();
        })
        .catch((error) =>
            console.log("Hubo un error creando el post", error)
        );

};