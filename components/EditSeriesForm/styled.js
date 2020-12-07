import styled from "styled-components";

export const Container = styled.div`
  .input_row {
    position: relative;
  }
  .input_row div {
    position: absolute;
    top: 19px;
    right: 22px;
    color: #ff0000;
  }
  margin-top: 40px;
  width: 100%;

  .error_message {
    padding: 20px;
    color: #ff0000;
    font-size: 14px;
  }

  input,
  select,
  textarea {
    width: 100%;
    min-height: 60px;
    line-height: 34px;
    border: 1px solid #ddd;
    background: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding-left: 12px;
    font-size: 17px;
    margin-bottom: 10px;
  }
  input[type="submit"],
  button {
    width: 100px;
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
  select {
    background: url(images/arrow.png) no-repeat center right;
  }
  input[type="radio"],
  input[type="checkbox"] {
    border: 0;
    height: auto !important;
    background: none;
    padding-left: 0;
    line-height: inherit;
    min-height: 0;
  }
  input[type="radio"] {
    -webkit-appearance: radio;
    -moz-appearance: radio;
    appearance: radio;
  }
  input[type="checkbox"] {
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
    appearance: checkbox;
  }
  label {
    font-size: 16px;
  }
  .btn-container{
    display: flex;
    gap: 1em;
    justify-content: flex-start;
    align-items: center;
  }
  .message{

    color: #d2e603;
    font-size:12px;
  }
  .upload__image-wrapper{
    width: 100% !important;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .image-uploader{
    width: 100% !important;
    margin-bottom: 2em;
    .image-uploader-container{
      width: 100% !important;
    }
    .image-item{
      width:80%;
      display: flex;
      margin: 1em 0;
      gap: 1em;
      align-items: center;
      padding-bottom: 1em;
      border-bottom: 1px solid rgba(34, 34, 34, 0.1);
      justify-content: space-between;
    }
    button{
      width: fit-content !important;
      font-size:12px !important;
    }
  }
  .principal{
    width: 100% !important;
    margin: 0 auto;
  }
  .secondary{
    padding: 0.3em 0.4em !important;
    border: none;
    font-size:12px !important;
  }
  .btn-clickordrop{
    padding: 5em !important;
    min-width: 100% !important;
    font-size: 14px !important;
    border-style: dashed  !important;
  }
  .btn-remove{

    color: #e74c3c;
    border-color: #e74c3c;
    :hover{
      background-color: #e74c3c;
    }
  }
  .btn-update{
    color: #3498db;
    border-color: #3498db;
    :hover{
      background-color: #3498db;
    }
  }
`;
