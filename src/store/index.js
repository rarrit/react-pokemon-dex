import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "../feature/pokemons/pokemonsSlice"

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  }
})

export default store