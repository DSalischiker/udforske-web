import { HeroSlider, Bio, PhotoButton } from "components";
import { Container, Img } from "./styled";
import Image from "next/image";
const Home = () => {

  return (
    <Container>
      <div className="Hero-Container">
        <HeroSlider />
        {/* <Img src="./slider1.jpg"></Img> */}
      </div>

      <div className="Index-Container">
        <section>
          <Bio
            className="Bio"
            title="Bio"
            text="Nacido y criado en Buenos Aires, más precisamente en el barrio de Villa Crespo. Soy estudiante de Tecnologías Multimediales, y me interesa explorar la cultura y el paisaje que me rodea, intentando aportar una mirada austral a esta civilización boreal. Soy aficionado a la astronomía y mi entrada a ese mundo y al de la fotografía se viene dando en paralelo hace unos tres años."
            src="./bio.png"
          />
          <Bio
            className="Bio"
            title="Udforske"
            text="Del danés /'üdfɔrʃkɛ/.
            Explorar, investigar, recorrer.

            Udforske es una especie de proyecto exploratorio personal. Tanto de exploraciones externas y tangibles al conocer lugares y rincones nuevos, como de exploraciones internas y propias que nos van sucediendo a cada une.
Una forma de registrar ese proceso o esa búsqueda eterna de lo que queremos hacer en nuestros días y cuáles son las cositas que nos mueven y nos hacen disfrutar tan plenamente. Cosas que mutan y van cambiando, como nosotres. En este momento y en mi caso se trata de la fotografía, el cosmos, lo audiovisual y la naturaleza entre otras cosas.
"
            src="./iso_negro.svg"
          />
        </section>
        <section>
          <div className="PhotoButtons-Container">
            <PhotoButton src="/photobutton1.png" href="/mapa" title="mapa_" />
            <PhotoButton
              src="/photobutton2.png"
              href="/series"
              title="series_"
            />
            <PhotoButton
              src="/photobutton3.png"
              href="/tienda"
              title="tienda_"
            />
          </div>
        </section>
        {/* <section className='spotify'>
          <iframe
            src="https://open.spotify.com/embed/playlist/5qTogUGumSAocuvB5N5JqG"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </section> */}
      </div>
    </Container>
  );
};

export default Home;
