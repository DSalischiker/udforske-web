import { Container } from "./styled";

import Link from "next/link";
const SeriesItem = ({ href, src, name }) => {
  return (
    <Container>
      <Link href={href}>
        <a>
          <div className='Content'>
            <img src={src} alt="serie" />
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
