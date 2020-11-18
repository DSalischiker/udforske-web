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
    date, //string
  } = req.body;

  return await db
    .collection("posts")
    .doc(id)
    .set({
      user_id,
      title,
      country,
      desc,
      photos,
      coordinates,
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
