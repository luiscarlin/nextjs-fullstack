interface PokemonResponse {
  count: number;
  next: string;
  previous: any;
  results: { name: string; url: string }[];
}

async function getPokemonList() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = (await response.json()) as PokemonResponse;

  return data;
}

export default async function PokemonPage() {
  const pokemonResponse = await getPokemonList();

  const pokemonList = pokemonResponse.results;

  console.log(pokemonResponse);

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
