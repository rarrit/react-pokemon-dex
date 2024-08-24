import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";


const PokemonList = () => {  
  const pokemonList = useSelector(state => state.pokemons.pokemonList);
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