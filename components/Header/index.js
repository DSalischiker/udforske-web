import { Container as HeaderContainer } from "./styled";
import { Nav } from "components";
import Link from 'next/link';
const Header = ({ children }) => {
  return (
    <>
      <HeaderContainer>
        <Link href='/'>
          <a>
        <img src="/logo_blanco.svg" alt="logo" />
        </a>
        </Link>
        <Nav />
      </HeaderContainer>
    </>
  );
};

export default Header;
