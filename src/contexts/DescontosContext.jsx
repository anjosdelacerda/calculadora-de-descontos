import { createContext, useState } from "react";

export const DescontosContext = createContext([]);

export const DescontoProvider = ({ children }) => {
  const [desconto, setDesconto] = useState([]);

  function renderDesc(list) {
    setDesconto(list);
  }

  function convertionDesc(list) {
    let um = list[0] / 100;
    let dois = list[1] / 100;
    let tres = list[2] / 100;
    let quatro = list[3 / 100];

    const novaLista = {
      diaUm: um,
      diaDois: dois,
      diaTres: tres,
      diaQuatro: quatro,
    };

    return novaLista;
  }

  return (
    <DescontosContext.Provider
      value={{ desconto, setDesconto, renderDesc, convertionDesc }}
    >
      {children}
    </DescontosContext.Provider>
  );
};
