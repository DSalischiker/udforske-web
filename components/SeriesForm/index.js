import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Container } from "./styled";
import { storage } from "lib/firebase";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import firebase from "firebase";
import "firebase/storage";
const SeriesForm = (props) => {
  const [message, setMessage] = useState("");

  /* const allInputs = { imgUrl: "" }; */
  /* const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs); */
  const [dateSelected, setDate] = useState();

  const [place, setPlace] = useState(null);
  const [location, setLocation] = useState({});
  const [photosUrls, setPhotosUrls] = useState([]);
  const urlArray = [];
  //onChange 1 imagen
  /* console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
  }; */

  //onChange múltiples imágenes
  const [files, setFiles] = useState([]);
  const onFileChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile["id"] = Math.random();
      // add an "id" property to each File object
      setFiles((prevState) => [...prevState, newFile]);
    }
    console.log('FILES', files)
  };

  const handlePlaceChange = (e) => {
    setPlace(e);
    geocodeByAddress(e.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        const location = {
          name: e.value.terms[0].value,
          region: e.value.terms[1].value,
          lat: lat,
          lng: lng,
        };
        setLocation(location);
      });
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
          photos: [],
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
          if (!values.photos) {
            errors.photos = "Requerido";
          }
          if (!values.date) {
            errors.date = "Requerido";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            //Upload múltiples imágenes
            const promises = [];
            files.forEach((file) => {

              const uploadTask = firebase
                .storage()
                .ref()
                .child(`photos/${values.title}/${file.name}`)
                .put(file);

                const promise = new Promise((resolve, reject) => {
                  uploadTask.on(
                    firebase.storage.TaskEvent.STATE_CHANGED,
                    (snapshot) => {
                      const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                        console.log(`Progress: ${progress}%`);
                      }
                    },
                    function(error) {
                      reject(error);  // added this line
                      alert(error);
                    },
                    async () => {
                      const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                        //do something with the URL
                      urlArray.push(downloadURL);
                      console.log('urlArray:', urlArray);
                      resolve();
                    }
                  );
                  /* uploadTask.on(
                   'state_changed',
                   function(snapshot) {
                     const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                     console.log('Upload is ' + progress + '% done');
                   },
                   function(error) {
                     reject(error);  // added this line
                     alert(error);
                   },
                   function() {
                     const downloadURL = uploadTask.snapshot.downloadURL;
                     console.log(downloadURL);
                     resolve();  // added this line
                   }
                 ); */
               });
              promises.push(promise);
              /* uploadTask.on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => {
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  if (snapshot.state === firebase.storage.TaskState.RUNNING) {
                    console.log(`Progress: ${progress}%`);
                  }
                },
                (error) => console.log(error.code),
                async () => {
                  const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                    //do something with the URL
                  urlArray.push(downloadURL);
                  console.log('urlArray:', urlArray);
                }
              ); */

            });

            Promise.all(promises)
            .then( async ()=> {
              alert("All files uploaded")
              setPhotosUrls(urlArray);
              console.log("PhotosUrls: ", photosUrls);
              const res = await axios.post("/api/series/create", {
                title: values.title,
                countryName: values.countryName,
                photos: urlArray,
                desc: values.desc,
                location: location,
                date: dateSelected,
              });

              //POST A FIRESTORE
              const data = await res.data;
              setSubmitting(false);
              setMessage(`Post creado, thanks ${data.title} (${res.status})`);
            })
            .catch((err) => console.log(err.code));

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
            <div className='flex-row'>
              <div className='flex-row-item input_row'>
                <Field type="text" name="countryName" placeholder="País" />
                <ErrorMessage name="countryName" component="div" />
                </div>
                <div className='flex-row-item'>
              <GooglePlacesAutocomplete
              className='input-places input_row'
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                selectProps={{
                  placeholder: 'Locación:',
                  place,
                  onChange: handlePlaceChange,
                  componentRestrictions: {
                    language: ["es"],
                  },
                }}
              />
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
            <div className='flex-row'>
<div className='flex-row-item-1'>
              <Field
                type="file"
                name="photos"
                placeholder="Fotos"
                onChange={onFileChange}
                multiple
              />
              <ErrorMessage name="photos" component="div" />
              </div>



              <div className='flex-row-item-2'>
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
