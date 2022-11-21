import { Resultados } from "./style";

import { useContext, useEffect } from "react";
import { AmountContext } from "../../contexts/AmountCountext";
import { DescontosContext } from "../../contexts/DescontosContext";

function Results() {
  const { desconto } = useContext(DescontosContext);
  const { saveAmount } = useContext(AmountContext);

  useEffect(() => {}, [desconto]);

  const subNumber = Number(saveAmount);

  const primeiroDesconto = subNumber - desconto[1] / 100;
  const segundoDesconto = subNumber - desconto[15] / 100;
  const terceiroDesconto = subNumber - desconto[30] / 100;
  const quartoDesconto = subNumber - desconto[90] / 100;

  return (
    <Resultados>
      <h2>Você Receberá </h2>
      <li>
        Amanhã: <strong>R$: {primeiroDesconto.toFixed(2)}</strong>
      </li>
      <li>
        Em 15 dias: <strong>R$: {segundoDesconto.toFixed(2)}</strong>
      </li>
      <li>
        Em 30 dias: <strong>R$: {terceiroDesconto.toFixed(2)}</strong>
      </li>
      <li>
        Em 90 dias: <strong>R$: {quartoDesconto.toFixed(2)}</strong>
      </li>
    </Resultados>
  );
}

export default Results;
