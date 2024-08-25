import { useEffect } from "react";
import { useSelector } from "react-redux";
import Dashboard from "@/components/Dashboard";
import PokemonList from "@/components/PokemonList";
import bgImage from "/src/assets/img/bg-pokemon.webp";
import styled from "styled-components";


const Dex = () => {

  // selectPokemonList 가져오기
  const selectPokemonList = useSelector(state => state.pokemons.selectPokemonList);
  
  useEffect(() => {
    localStorage.setItem('selectPokemonList', JSON.stringify(selectPokemonList))
  }, [selectPokemonList])  

  return (
    <DexWrap>
      <Dashboard/>
      <PokemonList/>        
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
    background-position: center center;
    background-size:cover;
  }  
`;
export default Dex
