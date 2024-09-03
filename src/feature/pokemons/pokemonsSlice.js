import pokemonList from "@/mock.js";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    // 초기 HOME -> DEX 이동 애니메이션
    isAnimation: false,
    // 선택된 포켓몬 리스트 
    selectPokemonList: [],
    // 전체 포켓몬 리스트
    pokemonList
  },

  reducers: {
    setIsAnimation(state, action){
      state.isAnimation = action.payload;
    },
    addPokemon(state, action){
      const selectedPokemon = action.payload;
      const isCheck = state.selectPokemonList.some(list => list.id === selectedPokemon.id)
      if(isCheck){
        toast.error('🦄 이미 등록된 포켓몬입니다!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return;
      }
      if(state.selectPokemonList.length < 6){
        state.selectPokemonList.push(selectedPokemon);
        toast.success(`"${selectedPokemon.korean_name}" 이(가) 추가되었습니다 !`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }else{
        toast.warn('포켓몬이 꽉 차버렸습니다! ', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        window.scrollTo(0, 0);
      }
    },
    removePokemon(state, action) {
      const selectedPokemon = action.payload;                      
      state.selectPokemonList = state.selectPokemonList.filter(list => list.id !== selectedPokemon.id);    
      toast.error(`"${selectedPokemon.korean_name}" 이(가) 삭제되었습니다 !`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",              
      });  
      
    }

  }

})


export const { setIsAnimation, addPokemon, removePokemon} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;