import Link from "next/link";

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
  const data = await response.json();

  return {
    props: {
      data: data.results,
    },
  };
}

export default function Pokemon({ data }) {
  return (
    <div>
      <h1>Pokemon</h1>
      {data?.map((pokemon) => {
        return (
          <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
            <article key={pokemon.name}>{pokemon.name}</article>
          </Link>
        );
      })}
    </div>
  );
}
