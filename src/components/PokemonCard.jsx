import { useNavigate } from "react-router-dom";
import { TypeAttr, TypeBg } from "../assets/js/types";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "@/feature/pokemons/pokemonsSlice";
import styled from "styled-components";


const PokemonCard = ({ pokemon  }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const selectPokemonList = useSelector(state => state.pokemons.selectPokemonList);
  const isSelected = selectPokemonList.find(list => list.id === parseInt(pokemon.id));
  const filterType = TypeAttr(pokemon.types[0]);
  const pokemonBg = TypeBg(filterType);    
    
  const handleDetailClick = () => navigate(`/detail/${pokemon.id}`);
  const handleAddPokemon = (pokemon) => dispatch(addPokemon(pokemon));    
  const handleRemovePokemon = (pokemon) => dispatch(removePokemon(pokemon));

  return (
    <>
      <CardItem $filterBg={pokemonBg} className={!isSelected ? "" : "selected"}>
        <ImgBox $imgUrl={pokemon.img_url}>
          <button onClick={handleDetailClick}></button>
        </ImgBox>
        <TextBox>
          <p className="pokemonName">{pokemon.korean_name}</p>
          <p className="pokemonDesc">{pokemon.description}</p>
        </TextBox>        
        <ButtonArea>
          <div className="inner">
            <button onClick={handleDetailClick}>DETAIL</button>
            {isSelected ? (
              <Button onClick={() => handleRemovePokemon(pokemon)}>REMOVE</Button>
            ) : (
              <Button onClick={() => handleAddPokemon(pokemon)}>ADD</Button>
            )}
          </div>          
        </ButtonArea>
        
      </CardItem>
    </>
  )
}

export default PokemonCard

const CardItem = styled.div`  
  position:relative;
  display: flex;
  flex-direction: column;  
  width:calc(20% - 20px);
  height:420px;
  background: url(${props => props.$filterBg}) no-repeat;
  background-size:100% 100%;
`;

const ImgBox = styled.div`
  width: 100%; /* 원하는 너비 */
  height: 230px; /* 원하는 높이 */
  background: url(${props => props.$imgUrl}) no-repeat center center;
  background-size: 140px;
  a,button {
    display: block;
    width: 100%;
    height: 100%;
    background:transparent;
    border: none;
    cursor: pointer;
  }
`;

const ButtonArea = styled.div`  
  position: absolute;
  top: 165px;
  left: 0;
  z-index: 1;
  padding: 0 30px;
  width: 100%;
  box-sizing: border-box;
  .inner {
    display:flex;  
    background:#f5483d;    
    border:1px solid #000;
    border-radius:50px;
    overflow: hidden;
    > * {
      flex: 1;
      display:flex;
      align-items: center;
      justify-content: center;
      height:25px;
      text-decoration: none;  
      background:transparent; 
      border:none; 
      cursor: pointer;  
      color:#ffcc1c;  
      &:first-child {
        color:#f5483d;
        background:#d0d9de;
      }
    }
  }  
`
const Button = styled.button`
  border:none;
`;

const TextBox = styled.div`
  padding:0 40px;
  .pokemonName {
    font-size:24px;
    font-weight:bold;
    color:#000;
  }
  .pokemonDesc {
    margin:10px 0 0 0;
    font-size:16px;
    color:#212121;
  }
`