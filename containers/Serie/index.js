import { Container } from "./styled";
import { SeriesData } from "components";
import { useState, useEffect } from "react";
import { db } from "lib/firebase";
import Link from "next/link";
import axios from "axios";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
const Serie = ({ props }) => {
  console.log(props);
  const [serie, setSerie] = useState({});

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, SetIsOpen] = useState(false);
  const {
    id,
    title,
    countryName,
    desc,
    photos,
    location,
    date,
    countryObj,
  } = props;
  return (
    <Container>
      <section>
        {/* <div className='masonry'> */}
        <h1 className='series-title'>
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75.07"
            height="75.542"
            viewBox="0 0 75.07 75.542"
          >
            <g
              id="Grupo_18"
              data-name="Grupo 18"
              transform="translate(-385.941 -926)"
            >
              <circle
                id="Elipse_5"
                data-name="Elipse 5"
                cx="4.004"
                cy="4.004"
                r="4.004"
                transform="translate(452.598 926)"
                fill="#222"
              />
              <circle
                id="Elipse_6"
                data-name="Elipse 6"
                cx="3.634"
                cy="3.634"
                r="3.634"
                transform="translate(453.742 968.229)"
                fill="#222"
              />
              <circle
                id="Elipse_7"
                data-name="Elipse 7"
                cx="4.139"
                cy="4.139"
                r="4.139"
                transform="translate(399.972 927.918)"
                fill="#222"
              />
              <circle
                id="Elipse_8"
                data-name="Elipse 8"
                cx="4.744"
                cy="4.744"
                r="4.744"
                transform="translate(385.941 992.053)"
                fill="#222"
              />
            </g>
          </svg>
        </h1>
        <div className="img-container">
          {/* MAP DE IMÁGENES */}
          {photos.length &&
            photos.map((photo) => {
              return <img src={photo} alt={`foto ${title}`} />;
            })}
          <button type="button" onClick={() => SetIsOpen(true)}>
            {isOpen && (
              <Lightbox
                mainSrc={photos[photoIndex]}
                nextSrc={photos[(photoIndex + 1) % photos.length]}
                prevSrc={
                  photos[(photoIndex + photos.length - 1) % photos.length]
                }
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + photos.length - 1) % photos.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % photos.length)
                }
              />
            )}
            Open Lightbox
          </button>
        </div>
        {/*
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">

            {photos.length && photos.map((photo) => {
              return (
                <img src={photo} alt={`foto ${title}`}/>
              )
            })}
          </Masonry>
        </ResponsiveMasonry> */}
        {/* </div> */}
      </section>
      <section>
        <SeriesData
          place={location.name}
          region={location.region}
          countryName={countryObj.name}
          countryFlag={countryObj.flag}
          description={desc}
          date={date}
        />
      </section>
    </Container>
  );
};

export default Serie;
