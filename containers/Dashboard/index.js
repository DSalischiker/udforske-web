import React, { useState } from "react";
import { useAuth } from "lib/useUser";
import { useProtected } from "lib/useProtected";
import {
  QuotesForm,
  ListQuotes,
  SeriesForm,
  ListSeries,
  SliderForm,
  ListSlider,
} from "components";
import { Container } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [showQuotes, setShowQuotes] = useState(false);
  const [showSeries, setShowSeries] = useState(false);

  const auth = useProtected();
  if (!auth.user) return null;
  console.log(auth.user);

  return (
    <Container>
      <h1>Dashboard_</h1>
      <p>{auth.user.email}</p>
      <section>
        <div className="btn-container">
          <button
            className={`btn-selector ${showSlider ? "selected" : ""}`}
            onClick={() => {
              setShowSlider(!showSlider);
              setShowQuotes(false);
              setShowSeries(false);
            }}
          >
            <span>Slider</span>
            {showSlider ? (
              <FontAwesomeIcon
                className="icon window-close"
                icon={faWindowClose}
              />
            ) : (
              ""
            )}
          </button>

          <button
            className={`btn-selector ${showQuotes ? "selected" : ""}`}
            onClick={() => {
              setShowQuotes(!showQuotes);
              setShowSlider(false);
              setShowSeries(false);
            }}
          >
            <span>Quotes</span>
            {showQuotes ? (
              <FontAwesomeIcon
                className="icon window-close"
                icon={faWindowClose}
              />
            ) : (
              ""
            )}
          </button>

          <button
            className={`btn-selector ${showSeries ? "selected" : ""}`}
            onClick={() => {
              setShowSeries(!showSeries);
              setShowSlider(false);
              setShowQuotes(false);
            }}
          >
            <span>Series</span>
            {showSeries ? (
              <FontAwesomeIcon
                className="icon window-close"
                icon={faWindowClose}
              />
            ) : (
              ""
            )}
          </button>
        </div>
      </section>

      {showSlider ? (
        <section className="form">
          <div className="form-container">
            <SliderForm userId={auth.user.id} />
            <ListSlider />
          </div>
        </section>
      ) : (
        ""
      )}

      {showQuotes ? (
        <section className="form">
          <div className="form-container">
            <QuotesForm userId={auth.user.id} />
            <ListQuotes />
          </div>
        </section>
      ) : (
        ""
      )}

      {showSeries ? (
        <section className="form">
          <div className="form-container">
            <SeriesForm userId={auth.user.id} />
            <ListSeries />
          </div>
        </section>
      ) : (
        ""
      )}

      {/* <section className="form">
        <SliderForm userId={auth.user.id}/>
        <ListSlider/>
      </section>
      <section className="form">
        <QuotesForm userId={auth.user.id}/>
        <ListQuotes />
      </section>

      <section className="form">
        <SeriesForm userId={auth.user.id}/>
        <ListSeries />
      </section> */}
    </Container>
  );
};

export default Dashboard;
