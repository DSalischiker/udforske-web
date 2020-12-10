import { Container as PhotoButtonContainer } from "./styled";

const PhotoButton = ({ src, title, href }) => {
  return (
    <>
      <PhotoButtonContainer src={src} href={href} whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 1 }}>
          <img
        src={src}
        alt="Foto de botón"
      />
        <h1>{title}</h1>
      </PhotoButtonContainer>
    </>
  );
};

export default PhotoButton;
