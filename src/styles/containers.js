import styled from "styled-components";

export const ContainerMaster = styled.div`
  box-sizing: border-box;
  display: flex;

  font-family: "Inter", serif;
  font-size: 1rem;

  background: #f5f7fa;

  align-items: center;

  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;
`;

export const ContainerDaCalculadora = styled.div`
  display: -webkit-inline-box;
  /* flex-direction: row; */

  align-items: center;
  justify-content: space-evenly;

  flex-direction: column;

  height: 60.6vh;
  width: 50vw;

  background-color: #ffffff;
  border: 1.2px solid #d9e2e8;
  box-shadow: 0px 0px 0px 0.5px #cdc9c9;
`;
