import { Container } from "./styled";
import Image from "next/image";
import Link from "next/link";
const SeriesItem = ({ href, src, name }) => {
  return (
    <Container>
      <Link href={href}>
        <a>
          <div className="Content">
            <Image
              src={src}
              alt="serie"
              width={1646}
              height={1097}
            />
            {/* <img src={src} alt="serie" /> */}
            <div className="Overlay">
              <div className="Text">{name}</div>
            </div>
          </div>
        </a>
      </Link>
    </Container>
  );
};

export default SeriesItem;
