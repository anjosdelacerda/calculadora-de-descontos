import { AlinhadorDeInputs, Form } from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import axios from "axios";
import { useContext } from "react";
import { DescontosContext } from "../../contexts/DescontosContext";

function Formulario() {
  const { renderDesc, desconto } = useContext(DescontosContext);

  const schema = yup.object().shape({
    amount: yup.string().required("Campo precisa ser preenchido"),
    installments: yup.string().required("Campo precisa ser preenchido"),
    mdr: yup.string().required("Campo precisa ser preenchido"),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const requestMDR = (data) => {
    // console.log(data);

    let amountInCents = Number(data.amount) * 100;

    console.log(amountInCents);

    data.amount = amountInCents;
    data.installments = Number(data.installments);
    data.mdr = Number(data.mdr);

    axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
      .then((response) => {
        renderDesc(response.data);
        console.log(desconto);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit(requestMDR)}>
      <h1>Simule a sua antecipação</h1>
      <AlinhadorDeInputs>
        <label>informe o valor da venda</label>
        <input
          type="number"
          step="0.01"
          min="0"
          {...register("amount")}
        ></input>
      </AlinhadorDeInputs>
      <AlinhadorDeInputs>
        <label>Em quantas parcelas</label>
        <input
          type="number"
          max="12"
          min="1"
          {...register("installments")}
        ></input>
        <span>máximo 12 parcelas</span>
      </AlinhadorDeInputs>
      <AlinhadorDeInputs>
        <label>Informe o percentual de MDR</label>
        <input type="number" {...register("mdr")}></input>
      </AlinhadorDeInputs>
      <AlinhadorDeInputs>
        <button> Submit </button>
      </AlinhadorDeInputs>
    </Form>
  );
}

export default Formulario;
