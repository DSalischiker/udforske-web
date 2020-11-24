import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Container } from "./styled";
import { storage } from "lib/firebase";
import "firebase/storage";

const SliderForm = (props) => {
  const [message, setMessage] = useState("");
    const [useSubmitting, setSubmitting] = useState();
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  //onChange 1 imagen
  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
  };

  return (
    <Container>
      <h2>Agregar img Slider</h2>
      <Formik
        initialValues={{
          /* photo: "", */
        }}
        validate={(values) => {
          const errors = {};
          /* if (!values.photo) {
            errors.photo = "Requerido";
          } */

          return errors;
        }}
        onSubmit={async (/* { setSubmitting } */) => {
          try {
            //Upload IMG a Firebase
            const fileInstance = new File([imageAsFile], imageAsFile.name);
            const storageRef = storage.ref(`/slider/${imageAsFile.name}`);
            //initiates the firebase side uploading
            const photoUrl = await storageRef
              .put(imageAsFile)
              .then(async (snapshot) => {
                return await snapshot.ref.getDownloadURL().then((url) => {
                  console.log("foto cargada", url);
                  return url;
                });
              })
              .catch((e) => {
                console.error(e);
              });
            console.log("photoUrl", photoUrl);

            const res = await axios.post("/api/slider/create", {
              url: photoUrl,
            });

            //POST A FIRESTORE
            const data = await res.data;
            /* setSubmitting(false); */
            setMessage(`Post creado, thanks ${data.url} (${res.status})`);
          } catch (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
            console.log(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input_row">
              <Field
                type="file"
                name="photo"
                placeholder="Foto"
                onChange={handleImageAsFile}
              />
              <ErrorMessage name="photo" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>

      <p>{message}</p>
    </Container>
  );
};

export default SliderForm;
