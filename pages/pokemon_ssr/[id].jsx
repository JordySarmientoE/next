export async function getServerSideProps({ params }) {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + params.id
  );
  const data = await response.json();

  return {
    props: {
      data: {
        name: data.name,
        weight: data.weight,
        sprites: data.sprites,
      },
    },
  };
}

export default function PokemonDetails({ data }) {
  return (
    <div>
      <span>{data.name}</span>
      <span>Peso: {data.weight}</span>
      {/* eslint-disable @next/next/no-img-element */}
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
}
