import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 2em 0 0 0;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* gap: 1em; */
  }
  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(34, 34, 34, 0.1);
    padding-bottom: 2em;
    margin: 2em auto 0 auto;
  }
  .flex-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    button {
        min-width: 100px;
      width: fit-content;
      cursor: pointer;
      opacity: 0.8;
      background: #fff;
      border: 3px solid #222222;
      border-radius: 0;
      text-transform: uppercase;
      padding: 20px 10px !important;
      color: white;
      background-color: #222222;
      margin: 0 1em;
      :hover {
        background-color: white;
        color: #222222;
      }
    }
  }
`;
