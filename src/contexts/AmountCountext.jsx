import { createContext, useState } from "react";

export const AmountContext = createContext(0);

export const AmountProvider = ({ children }) => {
  const [saveAmount, setSaveAmount] = useState("");

  function renderAmount(amount) {
    setSaveAmount(amount.toString().slice(0, -2));
  }

  return (
    <AmountContext.Provider value={{ saveAmount, setSaveAmount, renderAmount }}>
      {children}
    </AmountContext.Provider>
  );
};
