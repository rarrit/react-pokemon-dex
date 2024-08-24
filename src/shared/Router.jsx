import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@/pages/Home";
import Dex from "@/pages/Dex";
import Layout from "./Layout";
import Detail from "@/pages/Detail";

const Router = ({ pokemonList, isAnimation, setIsAnimation }) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home isAnimation={isAnimation} setIsAnimation={setIsAnimation} />} />
          <Route path="dex" element={<Dex pokemonList={pokemonList} isAnimation={isAnimation}/>} />
          <Route path="detail/:id" element={<Detail pokemonList={pokemonList}/>} />
        </Routes>
      </Layout>      
    </BrowserRouter>
  )
}

export default Router
