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
  > div {
    transition:all .3s ease;
    &:hover {
      transform: translateY(-10px);
    }
    &.selected {
      transform: scale(.85);
      box-shadow: .5px .5px 25px #ffc887;
      border-radius:12px
    }
  }
`;