import styles from "./Home.module.css"
import { Pokemon, PokemonProps } from "../../components/Pokemon"
import { useState, useEffect } from "react"

async function fetchPokemons() {
  const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })

  return response.json()
}

export const Home = () => {
  const [pokemonFetched, setPokemonFetched] = useState([])

  useEffect(() => {
    ;(async () => {
      setPokemonFetched(await fetchPokemons())
    })()
  })

  return (
    <div className={styles.intro}>
      <div>Pokédex !</div>
      <div className={styles.flexcontainer}>
        {pokemonFetched.map(({ id, name, weight, height }) => (
          <Pokemon name={name} id={id} weight={weight} height={height} key={id} />
        ))}
      </div>
    </div>
  )
}
