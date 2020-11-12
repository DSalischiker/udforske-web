import { Container as PhotoButtonContainer } from "./styled";


const PhotoButton = ({ src, title, href }) => {
  return (
    <>
      <PhotoButtonContainer src={src} href={href}>
          <img src={src}/>
        <h1>{title}</h1>
      </PhotoButtonContainer>
    </>
  );
};

export default PhotoButton;
