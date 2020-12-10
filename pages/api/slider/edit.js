// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {
  const {
    id, //string
    url,
    alt,
  } = req.body;

  return await db
    .collection("slider")
    .doc(id)
    .set({
      url,
      alt,
    })
    .then(() => {
      console.log("Firebase 4 - Post Editado");
      res.status(200).json({ message: "Post Editado", alt });
      res.end();
    })
    .catch((error) => console.log("Hubo un error editando el post", error));
};
