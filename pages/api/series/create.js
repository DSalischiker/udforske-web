// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {
    const {
        user_id, //string
        id, //string
        title, //string
        country, //{name, img}
        desc, // string
        photos, //[]
        coordinates, //{lat, lng}
        location, // {name, region}
    } = req.body;

    return await db
        .collection("series")
        .doc()
        .set(
            {
                user_id,
                id,
                title,
                country,
                desc,
                photos,
                coordinates,
                location
            }
        )
        .then(() => {
            console.log("Firebase 4 - Post Creado");
            res.status(200).json({ message: 'Post Creado', title })
            res.end();
        })
        .catch((error) =>
            console.log("Hubo un error creando el post", error)
        );

};