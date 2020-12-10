import { Container as HeaderContainer } from "./styled";
import { Nav } from "components";
import Link from "next/link";
const Header = ({ children }) => {
  return (
    <>
      <HeaderContainer>
        <Link href="/">
          <a>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/udforske-f73ff.appspot.com/o/general%2FLogo_blanco.png?alt=media&token=d4ea3a1d-8991-4fe5-b16e-32193e3415d5"
              alt="logo"
            />
          </a>
        </Link>
        <Nav />
      </HeaderContainer>
    </>
  );
};

export default Header;
