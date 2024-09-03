import { useEffect } from "react";
import { useSelector } from "react-redux";
import Dashboard from "@/components/Dashboard";
import PokemonList from "@/components/PokemonList";
import bgImage from "/src/assets/img/bg-pokemon.jpg";
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer />
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