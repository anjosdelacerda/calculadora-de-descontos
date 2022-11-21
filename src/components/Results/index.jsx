import { Resultados } from "./style";

import { useContext, useEffect } from "react";
import { DescontosContext } from "../../contexts/DescontosContext";

function Results() {
  const { desconto } = useContext(DescontosContext);

  useEffect(() => {}, [desconto]);

  console.log(desconto);

  console.log(desconto[1]);

  return (
    <Resultados>
      <h2>Você Receberá </h2>
      <li>
        Amanhã: <strong>R$: {desconto[1] / 100}</strong>
      </li>
      <li>
        Em 15 dias: <strong>R$: {desconto[15] / 100}</strong>
      </li>
      <li>
        Em 30 dias: <strong>R$: {desconto[30] / 100}</strong>
      </li>
      <li>
        Em 90 dias: <strong>R$: {desconto[90] / 100}</strong>
      </li>
    </Resultados>
  );
}

export default Results;
