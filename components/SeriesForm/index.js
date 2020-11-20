import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Container } from "./styled";
import { storage } from "lib/firebase";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

const SeriesForm = (props) => {
  const [message, setMessage] = useState("");

  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [dateSelected, setDate] = useState();

  const [place, setPlace] = useState(null);
  const [location, setLocation] = useState({});

  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
  };

  const handlePlaceChange = (e) => {
    setPlace(e);
    geocodeByAddress(e.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) =>{
        console.log("Successfully got latitude and longitude", { lat, lng });
        const location = {
          name:e.value.terms[0].value,
          region: e.value.terms[1].value,
          lat: lat,
          lng: lng,
        }
        console.log(location);
        setLocation(location);
      }

      );


  };

  const handleDateChange = (e) => {
    const dateFromInput = e.target.value;
    setDate(dateFromInput);
    console.log(dateFromInput);
  };
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
          /* photos: "", */
          lat: "",
          lng: "",
          location: "",
          region: "",
          date: "2020-11-16",
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
          /* if (!values.lat) {
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
          } */
          if (!values.date) {
            errors.date = "Requerido";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {

            //Upload IMG a Firebase
            const fileInstance = new File([imageAsFile], imageAsFile.name);
            const storageRef = storage.ref(`/images/${imageAsFile.name}`);
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
            const res = await axios.post("/api/series/create", {
              title: values.title,
              countryName: values.countryName,
              /* photos: values.photos, */
              image: photoUrl /* , user_id: userId  */,
              desc: values.desc,
              location: location,
              /* location: { name: values.location, region: values.region }, */
              date: dateSelected,
            });

            //POST A FIRESTORE
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
              <Field
                as="textarea"
                type="text"
                name="desc"
                placeholder="Descripción"
              />
              <ErrorMessage name="desc" component="div" />
            </div>
            <div className="input_row">
              <Field
                type="file"
                name="photos"
                placeholder="Fotos"
                onChange={handleImageAsFile}
              />
              <ErrorMessage name="photos" component="div" />
              {/* <button onClick={handleFireBaseUpload}>Upload img</button> */}
            </div>
            {/* <div>
              <h4>Coordenadas</h4>
              <div className="input_row">
                <Field type="text" name="lat" placeholder="Latitud" />
                <ErrorMessage name="lat" component="div" />
              </div>
              <div className="input_row">
                <Field type="text" name="lng" placeholder="Longitud" />
                <ErrorMessage name="lng" component="div" />
              </div>
            </div> */}
            <div>
              <h4>Locación</h4>
              <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                selectProps={{
                  place,
                  onChange: handlePlaceChange,
                  componentRestrictions:{
                  language:
                  ['es'],
                  }
                }}
              />
              {/* <div className="input_row">
                <Field type="text" name="location" placeholder="Lugar" />
                <ErrorMessage name="location" component="div" />
              </div>
              <div className="input_row">
                <Field type="text" name="region" placeholder="Región" />
                <ErrorMessage name="region" component="div" />
              </div> */}
              <h4>Fecha</h4>
              <div className="input_row">
                <Field
                  type="date"
                  name="date"
                  placeholder="Fecha"
                  onChange={handleDateChange}
                />
                <ErrorMessage name="date" component="div" />
              </div>
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
