import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Router from "./shared/Router";
import Poketmon from "@/mock.js";

function App() {
  // 전체 포켓몬 목록
  const [pokemonList, setPokemonList] = useState(Poketmon);  
  const [isAnimation, setIsAnimation] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Router 
        pokemonList={pokemonList} 
        isAnimation={isAnimation} 
        setIsAnimation={setIsAnimation} 
      />
    </>
  )    
}

export default App
