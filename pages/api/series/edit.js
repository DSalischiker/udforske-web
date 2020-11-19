// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {
  const {
    id, //string
    title, //string
    countryName, //{name, img}
    desc, // string
    photos, //[]
    image,
    lat, //{lat, lng}
    lng,
    location, // {name, region}
    region,
    date, //string
  } = req.body;

  return await db
    .collection("posts")
    .doc(id)
    .set({
      title,
      countryName,
      desc,
      photos,
      image,
      lat,
      lng,
      location,
      region,
      date
    })
    .then(() => {
      console.log("Firebase 4 - Post Edited");
      res.status(200).json({ message: "Post Creado", title });
      res.end();
    })
    .catch((error) => console.log("Hubo un error creando el post", error));
};
