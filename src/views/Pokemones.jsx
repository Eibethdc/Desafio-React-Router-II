import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokeContext } from '../context/PokeContext'

function Pokemones() {
    const {pokemones} = useContext(PokeContext)
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const irAPokemon = () =>{
        navigate(`/pokemones/${name}`)
    }
    return (
        <div className='section-pokemones'>
        <h1>Selecciona un Pokemon</h1>
        <select onChange={({ target }) => setName(target.value)}>
            <option value='Pokemones'>Pokemones</option>
            {pokemones.map((pokemon, index) => (
                <option key={index} value={pokemon.name}>{pokemon.name}</option>
            ))}
        </select>
        <button onClick={irAPokemon}>Ver Detalle</button>
        </div>
    )
}

export default Pokemones
