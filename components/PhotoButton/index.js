import { Container as PhotoButtonContainer } from "./styled";
import Image from 'next/image';
import { motion } from 'framer-motion';
const PhotoButton = ({ src, title, href }) => {
  return (
    <>
      <PhotoButtonContainer src={src} href={href} whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 1 }}>
          {/* <img src={src}/> */}
          <img
        src={src}
        alt="Foto de botón"
        /* width={525}
        height={351} */
      />
        <h1>{title}</h1>
      </PhotoButtonContainer>
    </>
  );
};

export default PhotoButton;
