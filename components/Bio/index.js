import { Container as BioContainer } from "./styled";
const Bio = ({ title, text, src }) => {
  return (
    <>
      <BioContainer>
        <div className="text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className='img'>
          <img src={src} alt="diego" />
        </div>
      </BioContainer>
    </>
  );
};

export default Bio;
