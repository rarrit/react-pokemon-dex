import { useState, useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import PokemonList from "@/components/PokemonList";

const Dex = ({ pokemonList, isAnimation }) => {
  // 선택한 포켓몬 리스트
  const [selectPokemonList, setSelectPokemonList] = useState([]);

  useEffect(() => {
    if(isAnimation) {
      console.log("test");
    }
  }, [isAnimation])

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
      // if(prevSelectPokemonList.some(list => list.id === selectedPokemon.id)) {
      //   alert("이미 등록된 포켓몬 입니다!");
      //   return prevSelectPokemonList;
      // }
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
    <>
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
    </>
  )
}

export default Dex
