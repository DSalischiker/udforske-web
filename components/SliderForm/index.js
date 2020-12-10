import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Container } from "./styled";
import { storage } from "lib/firebase";
import "firebase/storage";

const SliderForm = ({userId}) => {
  const [message, setMessage] = useState("");
    const [useSubmitting, setSubmitting] = useState();
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  //onChange 1 imagen
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
          alt: '',
        }}
        validate={(values) => {
          const errors = {};
          /* if (!values.photo) {
            errors.photo = "Requerido";
          } */
          if (!values.alt) {
            errors.alt = "Requerido";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            //Upload IMG a Firebase
            const fileInstance = new File([imageAsFile], imageAsFile.name);
            const storageRef = storage.ref(`/slider/${imageAsFile.name}`);
            //initiates the firebase side uploading
            const photoUrl = await storageRef
              .put(imageAsFile)
              .then(async (snapshot) => {
                return await snapshot.ref.getDownloadURL().then((url) => {
                  return url;
                });
              })
              .catch((e) => {
                console.error(e);
              });

            const res = await axios.post("/api/slider/create", {
              user_id:userId,
              url: photoUrl,
              alt: values.alt,
            });

            //POST A FIRESTORE
            const data = await res.data;
            /* setSubmitting(false); */
            setMessage(`Post creado - ${data.alt} (${res.status})`);
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
            <div className="input_row">
              <Field
                type="text"
                name="alt"
                placeholder="Texto alternativo"
              />
              <ErrorMessage name="alt" component="div" />
            </div>
            <div className='btn-container'>
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
            <p className='message'>{message}</p>
            </div>

          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SliderForm;
