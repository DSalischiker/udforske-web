import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Container } from "./styled";



const SeriesForm = (props) => {
  const [message, setMessage] = useState("");

  return (
    <Container>
      <h2>Crear Serie</h2>
      <Formik
        /* user_id, //string
            id, //string
            title, //string
            country, //{name, img}
            desc, // string
            photos, //[]
            coordinates, //{lat, lng}
            location, // {name, region}
            date, //string */
        initialValues={{
          title: "",
          countryName: "",
          desc: "",
          photos: "",
          lat: "",
          lng: "",
          location: "",
          region: "",
          /* date: "", */
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Requerido";
          }
          if (!values.countryName) {
            errors.countryName = "Requerido";
          }

          if (!values.desc) {
            errors.desc = "Requerido";
          }
          /* if (!values.photos) {
            errors.photos = "Requerido";
          } */
          if (!values.lat) {
            errors.lat = "Requerido";
          }
          if (!values.lng) {
            errors.lng = "Requerido";
          }
          if (!values.location) {
            errors.location = "Requerido";
          }
          if (!values.region) {
            errors.region = "Requerido";
          }
          /* if (!values.date) {
            errors.date = "Requerido";
          } */

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const res = await axios.post("/api/series/create", {
              ...values /* , user_id: userId  */,
            });
            const data = await res.data;
            setSubmitting(false);
            setMessage(`Post creado, thanks ${data.title} (${res.status})`);
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
                type="text"
                name="title"
                placeholder="Título de la Serie"
              />
              <ErrorMessage name="title" component="div" />
            </div>
            <div>
              <h4>País</h4>
              <div className="input_row">
                <Field type="text" name="countryName" placeholder="País" />
                <ErrorMessage name="countryName" component="div" />
              </div>
            </div>
            <div className="input_row">
              <Field type="text" name="desc" placeholder="Descripción" />
              <ErrorMessage name="desc" component="div" />
            </div>
            <div className="input_row">
              <Field type="file" name="photos" placeholder="Fotos" />
              <ErrorMessage name="photos" component="div" />
            </div>
            <div>
              <h4>Coordenadas</h4>
              <div className="input_row">
                <Field type="text" name="lat" placeholder="Latitud" />
                <ErrorMessage name="lat" component="div" />
              </div>
              <div className="input_row">
                <Field type="text" name="lng" placeholder="Longitud" />
                <ErrorMessage name="lng" component="div" />
              </div>
            </div>
            <div>
              <h4>Locación</h4>
              <div className="input_row">
                <Field type="text" name="location" placeholder="Lugar" />
                <ErrorMessage name="location" component="div" />
              </div>
              <div className="input_row">
                <Field type="text" name="region" placeholder="Región" />
                <ErrorMessage name="region" component="div" />
              </div>
              {/* <h4>Fecha</h4>
              <div className="input_row">
                <Field
                  type="date"
                  name="date"
                  value="2020-11-16"
                  placeholder="Fecha"
                />
                <ErrorMessage name="date" component="div" />
              </div> */}
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

export default SeriesForm;
