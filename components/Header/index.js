import {Container as HeaderContainer} from './styled';
import {Nav} from 'components';
import Head from 'next/head';
const Header = ({children}) => {
    return(
        <>
            <Head />
            <HeaderContainer>
                <img src='/logo_blanco.svg' alt='logo'/>
                <Nav/>
            </HeaderContainer>
        </>
    )
}

export default Header;