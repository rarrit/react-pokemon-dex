// import PokemonCard from '@/components/PokemonCard';
import { useEffect, useRef } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import bgImage from "/src/assets/img/bg-pokeball.jpg";
import detailImg from "/src/assets/img/bg-pokemon-detail.png";
import styled from 'styled-components';
import { addPokemon, removePokemon } from "@/feature/pokemons/pokemonsSlice";
import PokemonCard from '@/components/PokemonCard';
import { toast } from 'react-toastify';

const Detail = () => {

  const pokemonList = useSelector(state => state.pokemons.pokemonList);  
  const selectPokemonList = useSelector(state => state.pokemons.selectPokemonList);  
  const dispatch = useDispatch();    
  const navigate = useNavigate();
  const isActive = useRef("active");
  const { id } = useParams();    
  
  const selectedPokemon = pokemonList.find(pokemon => pokemon.id === parseInt(id));  
  const isSelected = selectPokemonList.find(pokemon => pokemon.id === parseInt(id));
  
  const handleLocationBack = () => navigate('/dex');  
  const handleLocationPrev = () => parseInt(selectedPokemon.id) === 1 ? alert("첫 번재 포켓몬 입니다!") : navigate(`/detail/${parseInt(selectedPokemon.id) - 1}`);
  const handleLocationNext = () => parseInt(selectedPokemon.id) === pokemonList.length ? alert("마지막 포켓몬 입니다!") : navigate(`/detail/${parseInt(selectedPokemon.id) + 1}`);
  const handleAddPokemon = (pokemon) => dispatch(addPokemon(pokemon));    
  const handleRemovePokemon = (pokemon) => dispatch(removePokemon(pokemon));
  const handleOpenSelectedList = () => {
    if(selectPokemonList.length === 0){
      return toast.error(`리스트에 포켓몬이 없습니다.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",              
      });  
    }
    if(isActive.current.classList.contains("active")){
      isActive.current.classList.remove("active");
    }else{
      isActive.current.classList.add("active");
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>
      <SelectPokemonBox>
        <div className="inner">
          <div className="imgBox">
            <img src={selectedPokemon.img_url} alt={selectedPokemon.korean_name} />
          </div>
          <div className='boxWrap'>
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
                <dd>{selectedPokemon.types.length >= 2 ? (
                  `${selectedPokemon.types[0]},${selectedPokemon.types[1]}`
                ) : (
                  selectedPokemon.types[0]
                )}</dd>
              </dl>
            </div>
          </div>          
          {
            isSelected ? (
              <button className='btnAction btnRemove' onClick={()=> handleRemovePokemon(selectedPokemon)}>삭제</button>                    
            ) : (
              <button className='btnAction btnAdd' onClick={()=> handleAddPokemon(selectedPokemon)}>추가</button>      
            )
          }          
          <button className='btnAction btnPrev' onClick={handleLocationPrev}>이전</button>
          <button className='btnAction btnNext' onClick={handleLocationNext}>다음</button>
          <button className='btnAction btnBack' onClick={handleLocationBack}>List</button>  
          <FixedListBtn className='btnListAll' onClick={handleOpenSelectedList}>SELECTED LIST<br/>TOGGLE</FixedListBtn>
        </div>
      </SelectPokemonBox>   

      <FixedList className='fixedList' ref={isActive}>
        <div className='inner'>
          {
            selectPokemonList.map(list => {
              return (
                <PokemonCard 
                  key={list.id}
                  pokemon={list}
                />
              )
            })
          }
        </div>
      </FixedList>
      
    </>    
  );
};



const SelectPokemonBox = styled.div`
  max-width:645px;
  margin: -80px auto;
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
    background-size:cover;
  }  
  .inner {
    position: relative;
    /* background: #f0f0f0; */
    width: 100%;
    height: 780px;
    background: url(${detailImg}) no-repeat center center;
    background-size:cover;
    z-index: 1;
  }
  .imgBox {
    position:absolute;
    top:110px;
    right:145px;
    text-align:center;
    img {
      width:200px;
    }    
  }
  .boxWrap {
    position:absolute;
    right:120px;
    bottom:115px;  
    width:100%;
    max-width:262px;
  }
  .titBox {
    text-align:center;
    h2 {
      font-size:24px;
      font-weight:bold;
      color:#212121;
      margin:0 0 10px;
    }
    p {
      font-size:14px;
      color:#464646;
      word-break: keep-all;
    }
  }
  .dlBox {
    display:flex;
    margin:10px auto;
    padding:10px 0;
    dl {
      position:relative;
      width:50%;
      text-align:center;
      padding:0 20px 0 0;
      &:first-child {
        padding:0 0 0 20px;
      }
      &:first-child:before {
        content:'';
        position:absolute; 
        top:50%;
        right:0;
        width:1px;
        height:40px;
        background: #999;
        transform:translateY(-50%);        
      }
      dt {
        font-size:14px;        
        border-bottom:1px solid #999;
        margin: 0 0 5px;
        padding: 0 0 8px;        
      }
      dd {
        font-size:18px
      }      
    }  
      
  }
  .btnAction {
    position: absolute;    
    right: 77px;
    bottom: 107px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border:2px solid #2b71b7;
    cursor: pointer;
    &.btnAdd {
      background:#a7f1a7;
    }
    &.btnRemove {
      background:#ffaaaa;
    }
    &.btnBack {
      width:38px;
      height:38px;
      bottom: 158px;
      background:#ffcb04;
      border-color:#2b71b7;
    }
    &.btnPrev {
      top:0;
      left:0;
      bottom: auto;
    }
    &.btnNext {
      top: 109px;
      right: 71px;
      bottom: auto;
      width: 44px;
      height: 207px;
      border-radius: 0;      
      border-color: #0e0e0e;
      background: #2b292b;
      color: white;
      box-shadow: .5px .5px 10px #2b292b;
      &:hover {
        background:#ffcb04;
        color:#000;
      }      
    }
    &.btnPrev {
      top: 109px;
      left: 210px;
      bottom: auto;
      width: 44px;
      height: 207px;
      border-radius: 0;      
      border-color: #0e0e0e;
      background: #2b292b;
      color: white;
      box-shadow: .5px .5px 10px #2b292b;
      &:hover {
        background:#ffcb04;
        color:#000;
      }
    }
  }
`;

const FixedListBtn = styled.button`
  position: absolute;
  left: 94px;
  bottom: 120px;
  width: 150px;
  height: 150px;
  color:#fff;
  border-radius: 100%;
  background:transparent;
  border:none;  
  cursor:pointer;
  &:hover {
    background:rgba(0,0,0,.15);
  }
`;
const FixedList = styled.div`
  position:fixed;  
  left:0;
  bottom:-280px;
  width:100%;
  height: auto;  
  transition:all .5s ease;
  .inner {   
    display:flex; 
    align-items: center;
    justify-content: center;
    gap: 10px;
    > div {
      position:relative;
      transition: all .5s ease;
      &:hover {
        transform:translateY(-140px);
      }
    }
  }
  &.active {
    bottom: -120px;
  }
`;

export default Detail;