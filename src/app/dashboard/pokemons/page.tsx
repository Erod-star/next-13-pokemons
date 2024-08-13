import { PokemonGrid } from '@/pokemons/components/PokemonGrid';
// import { notFound } from 'next/navigation';

// ? Type
import type { PokemonResponse, SimplePokemon } from '@/pokemons/interfaces';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokemons',
  description: 'List of pokemons',
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  // throw new Error('Dummy error');
  // throw notFound();

  return data.results.map((pokemon) => ({
    id: pokemon.url.split('/').reverse()[1],
    name: pokemon.name,
  }));
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemon list <small>static</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
