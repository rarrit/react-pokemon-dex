// import PokemonCard from '@/components/PokemonCard';
import { useParams } from 'react-router-dom';

const Detail = ({ pokemonList }) => {
  // URL에서 id를 추출
  const { id } = useParams();
  console.log( "useParams id =>", id );
  // 포켓몬 목록에서 해당 id에 맞는 포켓몬을 찾기
  const selectedPokemon = pokemonList.find(pokemon => pokemon.id === parseInt(id));

  if (!selectedPokemon) {
    return <div>포켓몬을 찾을 수 없슈.</div>;
  }

  return (
    <>
      <div>
        <h1>{selectedPokemon.korean_name}</h1>
        <img src={selectedPokemon.img_url} alt={selectedPokemon.korean_name} />
        <p>{selectedPokemon.description}</p>
      </div> 

      {/* {
        pokemonList.map(pokemon => 
          (            
            <PokemonCard 
              key={pokemon.id} 
              pokemon={pokemon}
            />
          )
        )
      } */}
    </>    
  );
};

export default Detail;