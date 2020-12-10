import { Container as FooterContainer } from "./styled";
import { Nav } from "components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = ({ children }) => {
  return (
    <>
      <FooterContainer>
        <div className="redes-div">
          <img src="https://firebasestorage.googleapis.com/v0/b/udforske-f73ff.appspot.com/o/general%2Fiso_negro.svg?alt=media&token=05d62821-cdab-42e3-aa62-6c16e0d573fb" />
          <div className="redes">
            <Link href="https://www.instagram.com/udforske_">
              <a target="_blank">
                <FontAwesomeIcon
                  className="icon instagram"
                  icon={["fab", "instagram"]}
                />
              </a>
            </Link>
            <Link href="https://www.behance.net/diegosalischiker">
              <a target="_blank">
                <FontAwesomeIcon
                  className="icon behance"
                  icon={["fab", "behance"]}
                />
              </a>
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=diegosalischiker711@gmail.com&su=Contacto+desde+Udforske+web">
              <a target="_blank">
                <FontAwesomeIcon className="icon envelope" icon={faEnvelope} />
              </a>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <Link href="/">
            <a>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/udforske-f73ff.appspot.com/o/general%2FLogo.png?alt=media&token=0d37e68c-57ee-49af-b94b-44b50aa89e07"
                alt="logo"
              />
            </a>
          </Link>

          <div className="legales">
            <p>
              <a
                target="_blank"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                algunos derechos reservados
              </a>
              . Buenos Aires, Argentina. 2020.
            </p>
          </div>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
