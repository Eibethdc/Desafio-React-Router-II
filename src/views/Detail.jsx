import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [stats, setStats] = useState([])
    const [type, setType] = useState([])

    const getPokemon = async () =>{
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const data = await response.json()
            setStats(data.stats)
            setPokemon(data.sprites.other.dream_world)
            setType(data.types[0].type)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() =>{
        getPokemon()
    }, [name]);

    return (
        <div className='container'>
            <div className='section-pokemon'>
                <img src={pokemon.front_default} alt={name} />
                <div>
                    <h1>{name}</h1>
                    <ul>
                        {stats.map((stat) => (
                            <li key={stat.stat.name}>{stat.stat.name} : {stat.base_stat}</li>
                        ))}
                    </ul>
                    <p> {type.name} </p>
                </div>
            </div>
        </div>
    )
}

export default Detail
