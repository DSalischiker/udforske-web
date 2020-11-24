import { Main } from "containers";
import { Header, Footer } from "components";

const Layout = ({ children }) => {
  return (
    <>
      <Header id="top"/>
      <Main>
        {children}

      </Main>
      <Footer />
    </>
  );
};

export default Layout;
