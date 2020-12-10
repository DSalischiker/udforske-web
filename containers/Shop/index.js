import { Container } from "./styled";
const Shop = () => {
  return (
    <Container>
      <div className="comprar">
        <div className="container-mp overlay-content">
          <p>¿Te gustaría tener alguno de estos paisajes australes en tu casa?</p>
          <p>Comprá tu cuadro a solo $1000, con la foto que quieras.</p>
          <button
            className="mp-button"
            src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
            data-preference-id="190015731-94ba5344-3d74-4ea2-8894-737645b7aef2"
          >
            <a href="https://mpago.la/1pYcdgi" target="_blank">
              Pagar con MercadoPago
            </a>
          </button>
          <p>Una vez efectuado el pago me contactaré por mail para que elijas la foto y arreglar el envío.</p>
          <p>Bicimensajería a todo CABA, retiro por Villa Crespo o MercadoEnvíos a todo el país.</p>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
