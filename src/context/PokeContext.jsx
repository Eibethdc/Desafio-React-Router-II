import { createContext, useEffect, useState } from "react";

export const PokeContext = createContext();

const PokeProvider = ({children}) => {
    const [pokemones, setPokemones] = useState([]);

    const getPokemones = async () =>{
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
            const data = await response.json()
            setPokemones(data.results)
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() =>{
        getPokemones()
    }, []);

    return(
        <PokeContext.Provider value={{ pokemones, setPokemones}}>
            {children}
        </PokeContext.Provider>
    )
}

export default PokeProvider;