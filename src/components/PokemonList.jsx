import { useContext } from "react";
import { pokemonContext } from "@/context/PokemonContext";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {  
  const {pokemonList} = useContext(pokemonContext);
  return (
    <>
      <ListContainer>
        {
          pokemonList.map(pokemon => 
            (
              <PokemonCard                 
                key={pokemon.id} 
                pokemon={pokemon}
                isSelected={false}
              />
            )
          )
        }
      </ListContainer>
    </>
  )
}

export default PokemonList

const ListContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:20px;
`;