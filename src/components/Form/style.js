import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  box-sizing: border-box;

  width: 55%;
  height: 100%;

  font-size: 12px;

  flex-direction: column;
  justify-content: center;

  color: #9c9c9c;

  padding-left: 40px;

  margin: 0px 0px 0px 0px;

  h1 {
    margin-left: 1rem;
    color: #898989;
    font-weight: bolder;
  }

  label {
    display: flex;
    font-size: 12px;
    font-weight: 400;

    width: 165px;
    margin-left: 5px;

    font-weight: bold;

    /* margin: 5px 5px; */
  }

  input {
    display: flex;

    width: 18.621rem;
    height: 2rem;

    background: white;
    border: 1.8px solid #eff2f4;
    border-radius: 4px;

    padding: 5px 5px;
    margin: 5px 5px;
  }

  input:hover {
    border: 2.2px solid #c6e1f7;
  }

  span {
    display: flex;
    width: 155px;
    margin-left: 5px;
    font-size: 9px;
  }

  button {
    display: flex;
    width: 18.621rem;
    height: 1.5rem;
    border: 1px solid #a2c5f2;
    border-radius: 4px;

    color: #4f82c1;
    font-size: 14px;
    font-weight: bolder;

    padding: 5px 5px;
    margin: 5px 5px;

    justify-content: center;
    align-items: center;
  }

  button:hover {
    border: 1.5px solid #4f82c1;
  }
`;

export const AlinhadorDeInputs = styled.div`
  width: 19rem;
  /* height: 5rem; */

  display: flex;

  flex-direction: column;
  justify-content: space-around;

  margin: 1rem 1rem;
`;
