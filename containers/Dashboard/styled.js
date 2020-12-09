import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 1000px) {
    width: 85%;
    margin: 2em auto 0 auto;
  }
  width: 100%;
  max-width: 1200px;
  margin: 2em auto 0 auto;
  .form {
    margin: 0 auto;
    width: 100%;
  }
  .form-container{
    width: 70% !important;
    margin: 0 auto;
  }
  .btn-container {
    margin-top: 3em;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .selected {
    border-color: #e74c3c !important;
    color: #e74c3c !important;
    :hover {
      background-color: #e74c3c !important;
      color: white !important;
    }
  }
  .btn-selector {
    .icon {
      margin-left: 1em;
    }
    width: 30%;
    cursor: pointer;
    opacity: 0.8;
    background: #fff;
    border: 3px solid #222222;
    border-radius: 0;
    text-transform: uppercase;
    padding: 20px 10px !important;
    /* margin-top: 20px; */
    color: #222222;
    background-color: white;
    /* margin: 0 auto; */
    :hover {
      background-color: #222222;
      color: white;
    }
  }

  section::after {
    content: "_";
    font-size: 74px;
    font-weight: 500;
    margin: 2em 0;
  }
`;
