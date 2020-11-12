import {Main} from 'containers';
import {Header, Footer} from 'components';
const Layout = ({children}) => {
return(
    <>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </>
)
}

export default Layout;