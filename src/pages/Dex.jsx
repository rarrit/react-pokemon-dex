import Dashboard from "@/components/Dashboard";
import PokemonList from "@/components/PokemonList";
import bgImage from "/src/assets/img/bg-pokemon.webp";
import styled from "styled-components";


const Dex = () => {
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
    background-position: center center;
    background-size:cover;
  }  
`;
export default Dex
