"use client";

import useSWR from "swr";

const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json());

interface PokemonResponse {
  count: number;
  next: string;
  previous: any;
  results: { name: string; url: string }[];
}

export default function PokemonPage() {
  const { data, error, isLoading } = useSWR<PokemonResponse>(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const pokemonList = data?.results;

  return (
    <div>
      <h1>Server side rendering</h1>
      <ul>
        <li>1. when page is accessed, 100 pokemon are fetched server-side</li>
        <li>
          2. on the server, the html for the 100 pokemon will be generated
        </li>
        <li>3. the server will send the html to the client</li>
        <li>4. the client renders the html</li>
      </ul>

      {pokemonList?.map((pokemon) => (
        <div key={pokemon.name}>
          <h2>{pokemon.name}</h2>
          <p>{pokemon.url}</p>
        </div>
      ))}
    </div>
  );
}
