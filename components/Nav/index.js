import { Container as NavContainer } from "./styled";
import Link from "next/link";
import { useAuth } from "lib/useUser";
const Nav = ({ children }) => {
  const auth = useAuth();
  console.log("MI USER ES", auth.user);
  return (
    <>
      <NavContainer>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/mapa">
            <a>mapa</a>
          </Link>
        </li>
        <li>
          <Link href="/series">
            <a>series</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>tienda</a>
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com/udforske_">
            <a target="_blank">instagram</a>
          </Link>
        </li>
        <div className="separador"></div>
        {!auth.user ? (
          <>
            <li>
              <Link href="/login">
                <a>login</a>
              </Link>
            </li>
            <li>
              <Link href="signup">
                <a>signup</a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/dashboard">
                <a>dashboard</a>
              </Link>
            </li>
            <li>
              <a onClick={() => auth.logout()}>logout</a>
            </li>
          </>
        )}
        <img className='ico' src="iso_blanco.svg" />
      </NavContainer>
    </>
  );
};

export default Nav;
