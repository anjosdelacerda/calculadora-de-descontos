import { createContext, useState } from "react";

export const DescontosContext = createContext([]);

export const DescontoProvider = ({ children }) => {
  const [desconto, setDesconto] = useState([]);

  function renderDesc(list) {
    setDesconto(list);
  }

  return (
    <DescontosContext.Provider value={{ desconto, setDesconto, renderDesc }}>
      {children}
    </DescontosContext.Provider>
  );
};
