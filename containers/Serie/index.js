import { Container } from "./styled";
import {SeriesData} from 'components';
const Serie = () => {
  return (
    <Container>
      <section>
        {/* MAP DE IMÁGENES */}
        <div className='Grid'>
        <img className='Vertical' src='/seriesitemprueba1.png'/>
        <img className='Vertical' src='/seriesitemprueba1.png'/>
        </div>
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
