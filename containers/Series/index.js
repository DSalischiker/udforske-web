import { Container } from "./styled";
import {SeriesItem} from 'components';
const Series = () => {
    return(
        <Container >
            <section>
            <div className='Grid'>
                {/* ACÁ VA UN .MAP DE SERIES COLLECTION*/}
                <SeriesItem className='Item' href='/series/asd' src='seriesitemprueba.jpg' name='Serie 1'/>
                <SeriesItem className='Item' href='/series/asd' src='seriesitemprueba.jpg' name='Serie 2'/>
                <SeriesItem className='Item' href='/series/asd' src='seriesitemprueba.jpg' name='Serie 3'/>
                <SeriesItem className='Item' href='/series/asd' src='seriesitemprueba.jpg' name='Serie 4'/>
                <SeriesItem className='Item' href='/series/asd' src='seriesitemprueba.jpg' name='Serie 5'/>
                <SeriesItem className='Item' href='/series/asd' src='seriesitemprueba.jpg' name='Serie 6'/>
                <SeriesItem className='Item' href='/series/asd' src='seriesitemprueba.jpg' name='Serie 7'/>
                <SeriesItem className='Item' href='/series/asd' src='seriesitemprueba.jpg' name='Serie 8'/>
                <SeriesItem className='Item' href='/series/asd' src='seriesitemprueba.jpg' name='Serie 9'/>
            </div>
            </section>
        </Container>
    )
}

export default Series;