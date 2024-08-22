import { Link } from "react-router-dom";
import styled from "styled-components";
import { TypeAttr, TypeBg } from "../assets/js/types";

const PokemonCard = ({ 
  pokemon, // 포켓몬 객체
  addPokemon, // 포켓몬 추가 함수
  removePokemon, // 포켓몬 삭제 함수
  isSelected // 추가 여부 체크
}) => {
  const filterType = TypeAttr(pokemon.types[0]);
  const filterBg = TypeBg(filterType);

  return (
    <>
      <CardItem filterBg={filterBg}>
        <ImgBox $imgUrl={pokemon.img_url}>
          <Link to={`/detail/${pokemon.id}`}></Link>
        </ImgBox>
        <TextBox>
          <p className="pokemonName">{pokemon.korean_name}</p>
          <p className="pokemonDesc">{pokemon.description}</p>
        </TextBox>        
        <ButtonArea>
          <div className="inner">
            <Link to={`/detail/${pokemon.id}`}>DETAIL</Link>
            {isSelected ? (
              <Button onClick={() => removePokemon(pokemon)}>REMOVE</Button>
            ) : (
              <Button onClick={() => addPokemon(pokemon)}>ADD</Button>
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
  background: url(${props => props.filterBg}) no-repeat;
  background-size:100% 100%;
`;

const ImgBox = styled.div`
  width: 100%; /* 원하는 너비 */
  height: 230px; /* 원하는 높이 */
  background: url(${props => props.$imgUrl}) no-repeat center center;
  background-size: 140px;
  a {
    display: block;
    width: 100%;
    height: 100%;
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
    > * {
      flex: 1;
      display:flex;
      align-items: center;
      justify-content: center;
      height:25px;
      text-decoration: none;    
      cursor: pointer;    
      &:first-child {
        color:#000;
        background:#d0d9de;
      }
    }
  }  
`
const Button = styled.div`
  
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