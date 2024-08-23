import { useState } from "react";
import { createContext } from "react";
import Poketmon from "@/mock.js";


export const pokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState(Poketmon);  
  const [isAnimation, setIsAnimation] = useState(false);
  const [selectPokemonList, setSelectPokemonList] = useState(() => {    
    const savedList = localStorage.getItem('selectPokemonList');    
    return savedList ? JSON.parse(savedList) : [];
  });

  const addPokemonHandler = (selectedPokemon) => {
    setSelectPokemonList(prevSelectPokemonList => {
      if(prevSelectPokemonList.some(list => list.id === selectedPokemon.id)) {
        alert("이미 등록된 포켓몬 입니다!");
        return prevSelectPokemonList;
      }
      if(prevSelectPokemonList.length < 6) {
        return [...prevSelectPokemonList, selectedPokemon];
      }else{
        alert("포켓몬이 꽉 차버렸슈. 등록은 불가능하오!");
        return prevSelectPokemonList;
      }      
    })
  };


  const removePokemonHandler = (selectedPokemon) => {
    setSelectPokemonList(prevSelectPokemonList => prevSelectPokemonList.filter(prevSelectedPokemon => prevSelectedPokemon !== selectedPokemon))
  }
    
  return (
    <pokemonContext.Provider value={{
      pokemonList, 
      setPokemonList, 
      isAnimation, 
      setIsAnimation,
      selectPokemonList,
      setSelectPokemonList,
      addPokemonHandler,
      removePokemonHandler
    }}>
      {children}
    </pokemonContext.Provider>
  )
}
