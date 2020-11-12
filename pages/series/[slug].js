import React from 'react';
import {Serie as SerieContainer} from 'containers';
/* import { getCollectionBySlug } from 'utils'; */

export default function Serie(props) {
  return (
    <SerieContainer />
  );
}

/* export async function getServerSideProps({ res, params }) {
    const { slug } = params;
    const data = await getCollectionBySlug(slug,'series',res)
    return { props: data }
} */
