import { React, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { db } from "lib/firebase";
import { Container } from "./styled";
import { SeriesData } from "components";
const Map = () => {
  const [series, setSeries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [flagToShow, setFlagToShow] = useState([]);
  const [countryObj, setCountryObj] = useState();
  const [clickedSerie, setClickedSerie] = useState({});
  useEffect(() => {
    db.collection("series")
      .onSnapshot((snap) => {
        const seriesDB = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSeries(seriesDB);
      })
  },
  db.collection("countries")
  .onSnapshot((snap) => {
    const countriesDB = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCountries(countriesDB);
  })
  , []);

  const K_MARGIN_TOP = 30;
  const K_MARGIN_RIGHT = 30;
  const K_MARGIN_BOTTOM = 30;
  const K_MARGIN_LEFT = 30;

  const K_HOVER_DISTANCE = 30;
  const createMapOptions = () => {
    return {
      styles: [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36,
            },
            {
              color: "#333333",
            },
            {
              lightness: 40,
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "labels",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#d2e603",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ff0000",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#d2e603",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#abbc00",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#c3d600",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#8b9800",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#d2e603",
            },
            {
              weight: "2.00",
            },
          ],
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#eaedc9",
            },
          ],
        },
        {
          featureType: "administrative.province",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#94a200",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "administrative.province",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#d2e603",
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "landscape.natural.landcover",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#d2e603",
            },
          ],
        },
        {
          featureType: "landscape.natural.terrain",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#d2e603",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#d2e603",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#b2b2b2",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              lightness: 18,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#222222",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#396db7",
            },
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#205874",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#e1e1e1",
            },
            {
              visibility: "on",
            },
          ],
        },
      ],
    };
  };
  const onChildClick = (e) => {
    setClickedSerie(series[e]);
    setFlagToShow(countries.filter( country => country.name == series[e].countryName));
  };
  return (
    <Container>
      {/* Important! Always set the container height explicitly */}
      <div className='div-map' style={{ height: "70vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
          defaultCenter={{ lat: -34.6, lng: -58.37 }}
          defaultZoom={4}
          yesIWantToUseGoogleMapApiInternals
          options={createMapOptions}
          onChildClick={onChildClick}
          margin={[
            K_MARGIN_TOP,
            K_MARGIN_RIGHT,
            K_MARGIN_BOTTOM,
            K_MARGIN_LEFT,
          ]}
        >

          {series &&
            series.map(
              (serie) => (
                (
                  <div
                    className="div-marker"
                    lat={serie.location.lat}
                    lng={serie.location.lng}
                    data={serie}
                  >
                    <img
                      className="img-marker"
                      src={serie.photos[0]}
                      alt={serie.title}
                    ></img>
                  </div>
                )
              )
            )}
        </GoogleMapReact>
      </div>
<section>
        {clickedSerie.title ?
          <div>
            <SeriesData
              place={clickedSerie.location?.name}
              region={clickedSerie.location?.region}
              countryName={clickedSerie.countryName}
              countryFlag={flagToShow ? flagToShow[0].flag : ''}
              description={clickedSerie.desc}
              date={clickedSerie.date}
            />
          </div>
         : <p className='click'>Hacé click en algún marker</p>}
</section>
    </Container>
  );
};

export default Map;