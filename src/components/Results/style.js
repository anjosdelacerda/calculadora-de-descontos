import styled from "styled-components";

export const Resultados = styled.div`
  display: flex;

  width: 45%;
  height: 100%;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background: #f7f9fa;

  padding: 8px 18px 8px 18px;

  h2 {
    border-bottom: 2px solid #e8f0f9;

    color: #6b96cb;
    font-weight: bolder;
    font-style: italic;

    margin-top: 28%;
    margin-bottom: 8%;
  }

  li {
    color: #97bef1;
    margin-bottom: 40px;
  }
`;
