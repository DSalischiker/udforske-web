import { Container as PhotoButtonContainer } from "./styled";
import Image from 'next/image';

const PhotoButton = ({ src, title, href }) => {
  return (
    <>
      <PhotoButtonContainer src={src} href={href}>
          {/* <img src={src}/> */}
          <Image
        src={src}
        alt="Foto de botón"
        width={525}
        height={351}
      />
        <h1>{title}</h1>
      </PhotoButtonContainer>
    </>
  );
};

export default PhotoButton;
