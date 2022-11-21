import "./App.css";

import Formulario from "./components/Form";
import Results from "./components/Results";
import { ContainerDaCalculadora, ContainerMaster } from "./styles/containers";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerMaster>
        <ContainerDaCalculadora>
          <Formulario />
          <Results />
        </ContainerDaCalculadora>
      </ContainerMaster>
    </>
  );
}

export default App;
