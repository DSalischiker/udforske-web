import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Container } from "./styled";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import firebase from "firebase";
import "firebase/storage";
import ImageUploading from "react-images-uploading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const SeriesForm = ({userId}) => {
  //REACT-IMAGES-UPLOAD
  const maxNumber = 29;
  const [images, setImages] = React.useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList);
    setImages(imageList);
  };

  const [message, setMessage] = useState("");
  const [dateSelected, setDate] = useState();
  const [place, setPlace] = useState(null);
  const [location, setLocation] = useState({});
  const urlArray = [];

  //onChange múltiples imágenes
  const [files, setFiles] = useState([]);
  const onFileChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile["id"] = Math.random();
      // add an "id" property to each File object
      setFiles((prevState) => [...prevState, newFile]);
    }
    console.log("FILES", files);
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
            images.forEach((file) => {
              const uploadTask = firebase
                .storage()
                .ref()
                .child(`photos/${values.title}/${file.file.name}`)
                .put(file.file);

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
                  function (error) {
                    reject(error); // added this line
                    alert(error);
                  },
                  async () => {
                    const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                    //do something with the URL
                    urlArray.push(downloadURL);
                    resolve();
                  }
                );
              });
              promises.push(promise);
            });

            Promise.all(promises)
              .then(async () => {
                alert("All files uploaded");
                const res = await axios.post("/api/series/create", {
                  user_id:userId,
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
            <div className="flex-row">
              <div className="flex-row-item input_row">
                <Field type="text" name="countryName" placeholder="País" />
                <ErrorMessage name="countryName" component="div" />
              </div>
              <div className="flex-row-item">
                <GooglePlacesAutocomplete
                  className="input-places input_row"
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                  selectProps={{
                    placeholder: "Locación:",
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
            <div /* className="flex-row-item-2" */>
                <Field
                  type="date"
                  name="date"
                  placeholder="Fecha"
                  onChange={handleDateChange}
                />
                <ErrorMessage name="date" component="div" />
              </div>
            <div className="image-uploader">
                {/* IMAGE UPLOADER COMPONENT */}
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      <button
                        className='btn-clickordrop principal'
                        style={isDragging ? { borderColor: "#d2e603" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <FontAwesomeIcon className="icon plus-square" icon={faPlusSquare} /> <span>Click o soltá las imágenes acá</span>
                      </button>
                      &nbsp;
                      <button className='btn-remove principal' onClick={onImageRemoveAll}>
                      <FontAwesomeIcon className="icon trash" icon={faTrash} /> <span>Eliminá todas las imágenes</span>
                      </button>
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image["data_url"]} alt="" width="100" />
                          <div className="image-item__btn-wrapper">
                            <button className='btn-update secondary' onClick={() => onImageUpdate(index)}>
                            <FontAwesomeIcon className="icon edit" icon={faEdit} /> Actualizar
                            </button>
                            <button className='btn-remove secondary' onClick={() => onImageRemove(index)}>
                            <FontAwesomeIcon className="icon trash" icon={faTrash} /> <span>Eliminar</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>

                {/* END IMAGE UPLOADER COMPONENT */}
                <ErrorMessage name="photos" component="div" />

            </div>


            <div className="btn-container">
              <button className='btn-submit' type="submit" disabled={isSubmitting}>
                Enviar Serie
              </button>
              <p className="message">{message}</p>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SeriesForm;
