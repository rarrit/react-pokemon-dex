import { useEffect, useContext } from "react";
import Dashboard from "@/components/Dashboard";
import PokemonList from "@/components/PokemonList";
import styled from "styled-components";
import bgImage from "/src/assets/img/bg-pokemon.jpg";
import { pokemonContext } from "@/context/PokemonContext";

const Dex = () => {

  const {
    selectPokemonList,
  } = useContext(pokemonContext);

  useEffect(() => {
    localStorage.setItem('selectPokemonList', JSON.stringify(selectPokemonList))
  }, [selectPokemonList])

  return (
    <DexWrap>
      <Dashboard />
      <PokemonList />
    </DexWrap>
  )
}

const DexWrap = styled.div`
  &:before {
    content:''; 
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background:url(${bgImage}) no-repeat;
    background-attachment : fixed;
    background-position: bottom right;
    background-size:100% 100%;
  }  
`;
export default Dex
