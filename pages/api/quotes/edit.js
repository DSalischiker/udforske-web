// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {
    const {
        id,
        author,
        text,
    } = req.body;

    return await db
        .collection("quotes")
        .doc(id)
        .set(
            {
                author,
                text
            }
        )
        .then(() => {
            console.log("Firebase 4 - Post Editado");
            res.status(200).json({ message: 'Post Editado', title })
            res.end();
        })
        .catch((error) =>
            console.log("Hubo un error editando el post", error)
        );

};