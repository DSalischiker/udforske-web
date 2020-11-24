// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {
  const {
    id, //string
    title, //string
    countryName, //{name, img}
    desc, // string
    photos, //[]
    location, // {name, region}
    date, //string
  } = req.body;

  return await db
    .collection("slider")
    .doc(id)
    .set({
      title,
      countryName,
      desc,
      photos,
      location,
      date
    })
    .then(() => {
      console.log("Firebase 4 - Post Edited");
      res.status(200).json({ message: "Post Creado", title });
      res.end();
    })
    .catch((error) => console.log("Hubo un error creando el post", error));
};
