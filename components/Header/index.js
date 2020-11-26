import { Container as HeaderContainer } from "./styled";
import { Nav } from "components";
import Link from 'next/link';
const Header = ({ children }) => {
  return (
    <>
      <HeaderContainer>
        <Link href='/'>
          <a>
        <img src="https://firebasestorage.googleapis.com/v0/b/udforske-f73ff.appspot.com/o/general%2Flogo_blanco.svg?alt=media&token=e44f52c2-da81-42f1-af74-7cd3d73d78c3" alt="logo" />
        </a>
        </Link>
        <Nav />
      </HeaderContainer>
    </>
  );
};

export default Header;
