// import PokemonCard from '@/components/PokemonCard';
import { pokemonContext } from '@/context/PokemonContext';
import { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import bgImage from "/src/assets/img/bg-pokeball.jpg";
import { useEffect } from 'react';

const Detail = () => {

  const {pokemonList} = useContext(pokemonContext);

  // URL에서 id를 추출
  const { id } = useParams();
  // 선택된 포켓몬을 기억하기 위해 useLocation 훅 사용
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPokemonList } = location.state || {}  
  // 포켓몬 목록에서 해당 id에 맞는 포켓몬을 찾기
  const selectedPokemon = pokemonList.find(pokemon => pokemon.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  if (!selectedPokemon) {
    return <div>포켓몬을 찾을 수 없슈.</div>;
  }

  const backHandler = () => {
    navigate('/dex', {
      state: {selectedPokemonList}
    });
  }
  
  return (
    <>
      <SelectPokemonBox>
        <div className="inner">
          <div className="imgBox">
            <img src={selectedPokemon.img_url} alt={selectedPokemon.korean_name} />
          </div>
          <div className="titBox">
            <h2>{selectedPokemon.korean_name}</h2>
            <p>{selectedPokemon.description}</p>
          </div>        
          <div className="dlBox">
            <dl>
              <dt>ID</dt>
              <dd>{selectedPokemon.id}</dd>
            </dl>
            <dl>
              <dt>TYPE</dt>
              <dd>{selectedPokemon.types}</dd>
            </dl>
          </div>
          <button onClick={backHandler}>뒤로가기</button>  
        </div>
      </SelectPokemonBox>          
    </>    
  );
};



const SelectPokemonBox = styled.div`
  width: 100%;
  max-width:400px;  
  margin:120px auto 0;  
  &:before {
    content:''; 
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background:url(${bgImage}) no-repeat;
    background-attachment : fixed;
    background-position: bottom right;
    background-size:100% 100%;
  }  
  .inner {
    position: relative;
    background:#f0f0f0;
    border:3px solid #f5473c;
    border-radius:10px;
    z-index: 1;
    padding:0 30px 30px;
  }
  .imgBox {
    position:relative;
    top:-120px;
    margin:0 0 -120px;
    text-align:center;
    img {
      width:200px;
    }
  }
  .titBox {
    text-align:center;
    h2 {
      font-size:30px;
      font-weight:bold;
      color:#212121;
      margin:0 0 15px;
    }
    p {
      font-size:16px;
      color:#858585;
      word-break: keep-all;
    }
  }
  .dlBox {
    display:flex;
    border-top:1px solid #cdcdcd;
    border-bottom:1px solid #cdcdcd;
    margin:15px auto;
    padding:15px 0;
    dl {
      position:relative;
      width:50%;
      text-align:center;
      &:first-child:before {
        content:'';
        position:absolute; 
        top:50%;
        right:0;
        width:1px;
        height:30px;
        background: #999;
        transform:translateY(-50%);        
      }
      dt {
        font-size:16px;
        margin: 0 0 5px;
      }
      dd {
        font-size:26px
      }
    }    
  }
  button {
    width:100%;
    font-size:18px;
    background: #ffcc1c;
    border:3px solid #456bbc;
    padding:10px 0;
    cursor:pointer;
    &:hover {
      background:#f5473c;
      color:#fff;
      transition:all .2s ease;
    }
  }
`;

export default Detail;