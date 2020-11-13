import { Container } from "./styled";
import {SeriesItem} from 'components';
const Series = () => {
    return(
        <Container >
            <section>
            <div className='Grid'>
                {/* ACÁ VA UN .MAP DE SERIES COLLECTION*/}
                <SeriesItem className='Item' href='/series/asd' src='/seriesitemprueba.jpg' name='Atacama'/>
                <SeriesItem className='Item' href='/series/asd' src='/seriesitemprueba.jpg' name='Jujuy'/>
                <SeriesItem className='Item' href='/series/asd' src='/seriesitemprueba.jpg' name='Salta'/>
                <SeriesItem className='Item' href='/series/asd' src='/seriesitemprueba.jpg' name='Rocha'/>
                <SeriesItem className='Item' href='/series/asd' src='/seriesitemprueba.jpg' name='Astros'/>
                <SeriesItem className='Item' href='/series/asd' src='/seriesitemprueba.jpg' name='Eclipses'/>
                <SeriesItem className='Item' href='/series/asd' src='/seriesitemprueba.jpg' name='Uyuni'/>
                <SeriesItem className='Item' href='/series/asd' src='/seriesitemprueba.jpg' name='Payunia'/>
                <SeriesItem className='Item' href='/series/asd' src='/seriesitemprueba.jpg' name='Los Molles'/>
            </div>
            </section>
        </Container>
    )
}

export default Series;