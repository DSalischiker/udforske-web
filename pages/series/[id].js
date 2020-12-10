import React from "react";
import { Serie as SerieContainer } from "containers";
import { db } from "lib/firebase";
import Link from "next/link";
import axios from "axios";
/* import { getCollectionBySlug } from 'utils'; */

export default function Serie(props) {
  return <SerieContainer props={props}/>;
}

export const getServerSideProps = async ({ query }) => {
  let serieObj = {};
  let countryObj = {};
  await db
    .collection("series")
    .doc(query.id)
    .get()
    .then(async (result) => {
      serieObj = {
        id: query.id,
        title: result.data().title,
        countryName: result.data().countryName,
        desc: result.data().desc,
        photos: result.data().photos,
        location: result.data().location,
        date: result.data().date,
      };
      await db
        .collection("countries")
        .doc(serieObj.countryName)
        .get()
        .then((result) => {
          countryObj = {
            name: result.data().name,
            flag: result.data().flag,
          };
        });
    });
  return {

    props: {
      id: serieObj.id,
      title: serieObj.title,
      countryName: serieObj.countryName,
      desc: serieObj.desc,
      photos: serieObj.photos,
      location: serieObj.location,
      date: serieObj.date,
      countryObj: countryObj,
    },
  };
};
