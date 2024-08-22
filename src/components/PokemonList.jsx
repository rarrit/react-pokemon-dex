import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ 
  pokemonList, // 전체 포켓몬 데이터
  addPokemon, // 포켓몬 추가 함수
  removePokemon, // 포켓몬 삭제 함수 
  selectPokemonList // 선택한 포켓몬 데이터 
}) => {  
  return (
    <>
      <ListContainer>
        {
          pokemonList.map(pokemon => 
            (
              <PokemonCard                 
                key={pokemon.id} 
                pokemon={pokemon}                                               
                addPokemon={addPokemon}
                removePokemon={removePokemon}
                isSelected={selectPokemonList.includes(pokemon)}
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