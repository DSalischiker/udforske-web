import { Container as SeriesDataContainer } from "./styled";

const SeriesData = ({ place, province, country, description, date }) => {
  return (
    <>
      <SeriesDataContainer>
        <div className="flex-row header">
          <div className="flex-column">
            <h1>{place}</h1>
            <h3>{province}</h3>
          </div>
          <div className="flex-column">
            <img src={country.img} alt={country.name} />
            <h3>{country.name}</h3>
          </div>
        </div>
        <p>{description}</p>
        <h3>{date}</h3>
      </SeriesDataContainer>
    </>
  );
};

export default SeriesData;
