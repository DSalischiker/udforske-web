import { Container } from "./styled";
import { SeriesData } from "components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Serie = () => {
  return (
    <Container>
      <section>
        {/* <div className='masonry'> */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {/* MAP DE IMÁGENES */}
            <img className="Horizontal" src="/seriesitemprueba.jpg" />
            <img className="Vertical" src="/seriesitemprueba1.png" />
            <img className="Vertical" src="/seriesitemprueba1.png" />
            <img className="Horizontal" src="/seriesitemprueba.jpg" />
            <img className="Horizontal" src="/seriesitemprueba.jpg" />
            <img className="Vertical" src="/seriesitemprueba1.png" />
            <img className="Horizontal" src="/seriesitemprueba.jpg" />
          </Masonry>
        </ResponsiveMasonry>
        {/* </div> */}
      </section>
      <section>
        <SeriesData
          place="Desierto de Atacama"
          province="Región de Antofagasta"
          country={{ name: "Chile", img: "/chile.svg" }}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          date="Enero 2019."
        />
      </section>
    </Container>
  );
};

export default Serie;
