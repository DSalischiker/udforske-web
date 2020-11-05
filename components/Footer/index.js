import {Container as FooterContainer} from './styled';
import {Nav} from 'components';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({children}) => {
    return(
        <>
            <FooterContainer>
            <div className='redes-div'>
                    <img src='iso_negro.svg'/>
                    <div className='redes'>
                    <Link href='https://www.instagram.com/udforske_'><a target='_blank'><FontAwesomeIcon className='icon instagram' icon={['fab', 'instagram']} /></a></Link>
                    <Link href='https://www.behance.net/diegosalischiker'><a target='_blank'><FontAwesomeIcon className='icon behance' icon={['fab', 'behance']} /></a></Link>
                    </div>
                </div>
                <div className='legales'>
                <img src='logo_negro.svg' alt='udforske'/>
                {children}

                <p>algunos derechos reservados. Buenos Aires, Argentina. 2020.</p>
                </div>
            </FooterContainer>
        </>
    )
}

export default Footer;