// ? Components
import { PokemonGrid } from '@/pokemons/components/PokemonGrid';

// ? Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Favorites',
  description: 'My favorite pokemons',
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Favorite pokemons <small className="text-blue-500">Global state</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
