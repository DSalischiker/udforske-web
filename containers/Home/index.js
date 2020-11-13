import { HeroSlider, Bio, PhotoButton } from "components";
import { Container, Img } from "./styled";
import Image from 'next/image';
const Home = () => {
  return (
    <Container>

      <div className="Hero-Container">
      <HeroSlider />
        {/* <Img src="./slider1.jpg"></Img> */}
      </div>

      <div className="Index-Container">
        <section>
          <Bio className="Bio" />
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
      </div>
    </Container>
  );
};

export default Home;
