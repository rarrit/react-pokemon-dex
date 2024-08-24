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
                    isSelected={true}
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
  background:#f5473c;
  padding:5px;
  border-radius: 20px;  
  margin: 0 0 40px;
  &:before {
    content:'My Pokemon List';
    position:absolute;
    top:-50px;
    left:50%;
    transform:translateX(-50%);
    font-size:40px;
    color:#ffcc1c;
    background:#456bbc;
    border:5px solid #ffcc1c;
    border-radius: 20px;
    padding:15px 80px;    
  }
  .dashList {
    display:flex;
    justify-content: center;
    gap:10px;
    background:#fff;
    padding:50px;
    border-radius:20px;
    > p {font-size:30px;}
  }
`;
