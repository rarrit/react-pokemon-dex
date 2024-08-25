import { useNavigate } from "react-router-dom";
import { TypeAttr, TypeBg } from "../assets/js/types";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "@/feature/pokemons/pokemonsSlice";
import styled from "styled-components";
import imgPokeball from "../assets/img/img-pokemonball.png";


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
      <CardItem 
        $filterBg={pokemonBg} 
        className={!isSelected ? "" : "selected"}
        onClick={() => isSelected ? handleRemovePokemon(pokemon) : handleAddPokemon(pokemon)}        
      >
        <ImgBox $imgUrl={pokemon.img_url} />
        <TextBox>
          <p className="pokemonName">{pokemon.korean_name}</p>
          <p className="pokemonDesc">{pokemon.description}</p>
        </TextBox>        
        <ButtonArea>
          <div className="inner">
            <Button onClick={(e) => {              
              e.stopPropagation();
              handleDetailClick();
            }}>자세히 보기</Button>
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
  justify-content: space-between;
  width:180px;
  height:253px;  
  background:#fff;
  cursor:pointer;
  &:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: url(${props => props.$filterBg}) no-repeat;
    background-size:100% 100%;
    z-index:1;
  }
  &.selected {
    &:after {
      content: '';
      position: absolute;
      z-index: 2;
      top: 16px;
      left: 4px;
      width: 29px;
      height: 29px;
      background: url(${imgPokeball}) no-repeat center center;
      background-size:cover;
      border-radius: 100%;
    }
  }  
  > div {
    position:relative;
    z-index:2;
  }
`;

const ImgBox = styled.div`
  width: 100%; 
  height: 120px;
  background: url(${props => props.$imgUrl}) no-repeat bottom center;
  background-size: 96px;
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
  padding: 0 30px 20px;
  width: 100%;
  box-sizing: border-box;
  .inner {
    display:flex;  
    background:rgba(255,255,255,.5);    
    box-shadow: .5px .5px 5px rgba(255,255,255,1);    
    overflow: hidden;
    > * {
      flex: 1;
      display:flex;
      align-items: center;
      justify-content: center;
      height:20px;
      text-decoration: none;  
      background:transparent; 
      border:none; 
      cursor: pointer;  
    }
  }  
`
const Button = styled.button`
  border:none;
`;

const TextBox = styled.div`
  padding:15px 30px;
  .pokemonName {
    font-size:16px;
    font-weight:bold;
    color:#000;
  }
  .pokemonDesc {
    margin:10px 0 0 0;
    font-size:14px;
    color:#212121;
  }
`