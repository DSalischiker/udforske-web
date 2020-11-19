// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {

/* - id (int)
- pais {nombre, img}
- nombre (string)
- descripción (string)
- fotos [ ]
- coordenadas { }
- nombre locacion (string)
- nombre provincia locación (string) */
    const {
        /* user_id, //string */
        id,
        title, //string
        countryName, //string
        desc, // string
        photos, //[]
        image,
        coord, //{lat, lng}
        location, // {name, region}
        date, //string
    } = req.body;

    return await db
        .collection("series")
        .doc()
        .set(
            {
                /* user_id, */
                id,
                title,
                countryName,
                desc,
                photos,
                image,
                coord,
                location,
                date,
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