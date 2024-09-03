import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const selectPokemonList = useSelector(state => state.pokemons.selectPokemonList);

  return (
    <>
      <DashboardContainer>
        <div className="dashList">
          {
            selectPokemonList.length === 0 ? (
              <p>등록된 포켓몬이 없습니다.</p>
            ) : (
              selectPokemonList.map(pokemon => {
                return (
                  <PokemonCard 
                    key={pokemon.id} 
                    pokemon={pokemon}        
                  />                  
                )
              })
            )
          }
        </div>
      </DashboardContainer>
    </>
  )
}

export default Dashboard

const DashboardContainer = styled.div`
  position:relative;
  box-shadow:.5px .5px 10px #2a74b9;
  padding:10px;
  border-radius: 20px;  
  margin: 0 0 40px;
  .dashList {
    display:flex;
    justify-content: center;
    gap:10px;
    background:#272727;
    border:1px solid #ffcb04;
    padding:25px;
    border-radius:20px;
    > p {font-size:30px; color:#999;}
  }
`;
