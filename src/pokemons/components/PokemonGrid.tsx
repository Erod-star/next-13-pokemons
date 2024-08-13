// ? Components
import { PokemonCard } from './PokemonCard';

// ? Types
import type { SimplePokemon } from '../interfaces/index';

interface PokemonGridPops {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonGridPops) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
