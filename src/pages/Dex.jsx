import { useState, useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import PokemonList from "@/components/PokemonList";
import styled from "styled-components";
import bgImage from "/src/assets/img/bg-pokemon.jpg";

const Dex = ({ pokemonList }) => {
  // 선택한 포켓몬 리스트
  const [selectPokemonList, setSelectPokemonList] = useState(() => {
    // [08-22 추가] 대시보드에 추가된 포켓몬을 유지하기 위해 로컬 스토리지를 사용함
    const savedList = localStorage.getItem('selectPokemonList');
    // [08-22 추가] 로컬스토리지가 있으면 저장된 값으로 업데이트, 없을경우 초기화
    return savedList ? JSON.parse(savedList) : [];
  });

  // [08-22 추가] selectPokemonList가 변경될 때 마다 localStorage에 저장해줌
  useEffect(() => {
    localStorage.setItem('selectPokemonList', JSON.stringify(selectPokemonList))
  }, [selectPokemonList])

  /*
   * [대시보드에 등록할 포켓몬 함수]
   * selectedPokemon : 추가될 포켓몬
   * setSelectPokemonList : 이전 상태 기반 새로운 상태를 계산
   * prevSelectPokemonList : 이전 선택한 포켓몬 목록 리스트
   * .some() : 이전 포켓몬 목록 리스트 중 내가 클릭한 포켓몬의 아이디 값이 있는지 판별 (중복 여부)
   * return prevSelectPokemon : 중복된 포켓몬이 있으면 상태를 변경하지 않음
   * length < 6 : 포켓몬은 6개 까지 등록되게 작동함
   * return [...prevSelectPokemon, selectedPokemon] : 내가 선택한 포켓몬을 리스트에 담아줌
   * length > 6 : alert 출력 및 현재 목록 리스트에서 변경하지 않음
  */
  const addPokemonHandler = (selectedPokemon) => {
    setSelectPokemonList(prevSelectPokemonList => {
      if(prevSelectPokemonList.some(list => list.id === selectedPokemon.id)) {
        alert("이미 등록된 포켓몬 입니다!");
        return prevSelectPokemonList;
      }
      if(prevSelectPokemonList.length < 6) {
        return [...prevSelectPokemonList, selectedPokemon];
      }else{
        alert("포켓몬이 꽉 차버렸슈. 등록은 불가능하오!");
        return prevSelectPokemonList;
      }      
    })
  };

  /*
   * [대시보드에 등록된 포켓몬 삭제 함수]
   * selectedPokemon : 삭제될 포켓몬
   * setSelectPokemonList : 이전 상태 기반 새로운 상태를 계산
   * prevSelectPokemonList : 이전 선택된 포켓몬 목록 리스트
   * filter : 주어진 조건을 만족하는 요소로들로만 이루어진 새로운 배열을 반환함
   * list !== selectedPokemon : 이전 저장된 목록 리스트를 순회하며 내가 클릭한 포켓몬(pokemon) 제외 후 새로운 배열을 만듦
  */
  const removePokemonHandler = (selectedPokemon) => {
    setSelectPokemonList(prevSelectPokemonList => prevSelectPokemonList.filter(prevSelectedPokemon => prevSelectedPokemon !== selectedPokemon))
  }

  return (
    <DexWrap>
      <Dashboard 
        selectPokemonList={selectPokemonList}
        removePokemon={removePokemonHandler}
      />
      <PokemonList 
        pokemonList={pokemonList} 
        addPokemon={addPokemonHandler}
        removePokemon={removePokemonHandler}
        selectPokemonList={selectPokemonList}
      />  
    </DexWrap>   
  )
}

const DexWrap = styled.div`
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
`;
export default Dex
