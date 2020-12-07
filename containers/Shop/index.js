import Feed from "react-instagram-authless-feed";
import { Container } from "./styled";
const Shop = () => {
  return (
    <Container>
      <h1>tienda_</h1>
      <div className='div-feed'>
        <Feed
          userName="udforske_"
          className="Feed"
          classNameLoading="Loading"
          limit="30"
        />
      </div>
    </Container>
  );
};

export default Shop;
