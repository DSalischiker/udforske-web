import { Container as SeriesDataContainer } from "./styled";

const SeriesData = ({ place, region, countryName, countryFlag, description, date }) => {

  return (
    <>
      <SeriesDataContainer>
        <div className="flex-row header">
          <div className="flex-column title">
            <h1>{place}</h1>
            <h3>{region}</h3>
          </div>
          <div className="flex-column country">
            <img src={countryFlag} alt={countryName} />
            <h3>{countryName}</h3>
          </div>
        </div>
        <p>{description}</p>
        <h3>{date}</h3>
      </SeriesDataContainer>
    </>
  );
};

export default SeriesData;
