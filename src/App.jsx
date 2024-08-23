import GlobalStyle from "./components/GlobalStyle";
import Router from "./shared/Router";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <PokemonProvider>
        <Router/>
      </PokemonProvider>      
    </>
  )    
}

export default App
