import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Pokemon = () => {

    const {name} = useParams();

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState({});
    const [color_type, setType] = useState({
        bug: 'bg-green-400',
        dark: 'bg-gray-800',
        dragon: 'bg-purple-800',
        electric: 'bg-yellow-400',
        fairy: 'bg-pink-400',
        fighting: 'bg-red-900',
        fire: 'bg-red-400',
        flying: 'bg-indigo-600',
        ghost: 'bg-indigo-700',
        grass: 'bg-green-600',
        ground: 'bg-yellow-700',
        ice: 'bg-blue-400',
        normal: 'bg-gray-500',
        poison: 'bg-purple-600',
        psychic: 'bg-pink-700',
        rock: 'bg-yellow-600',
        steel: 'bg-gray-400',
        water: 'bg-blue-500',
    });

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();

            setLoading(false);
            setPokemon(data);
        } catch (err) {
            setError(true);
            throw err;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (error) {
        return <div>ERROR</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {Object.keys(pokemon).length !== 0 ?
                <div className="w-80 bg-violet-200 border-black border-4 rounded-xl p-4 text-black">

                    <div className="w-90 bg-yellow-200 border-black border-4 rounded-xl p-4 text-black">
                        <h2 className="text-4xl font-bold p-1 text-center">{pokemon.name}</h2>

                        <img className="mx-auto" src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>

                    <span>Weight: {pokemon.weight} lbs</span>
                    <span>Height: {pokemon.height} "</span>

                    <h4>Abilities</h4>
                    <ul className="flex flex-row">
                        {pokemon.abilities.map((ability, index) => (
                            <li key={index} className="p-2">
                                {ability.ability.name}
                            </li>
                        ))}
                    </ul>

                    <h4>Statistics</h4>
                    <ul>
                        {pokemon.stats.map((stat, index) => (
                            <li key={index} className="border-black border-2 m-1 p-1 rounded-xl flex flex-row">
                                {stat.stat.name} : {stat.base_stat}
                            </li>
                        ))}
                    </ul>

                    <h4>Type(s)</h4>
                    <ul className="flex flex-row">
                        {pokemon.types.map((type, index) => (
                            <li key={index} className={"border-2 border-black rounded-xl m-2 p-2 " + color_type[type.type.name]}>
                                {type.type.name}
                            </li>
                        ))}
                    </ul>
                </div>
                : "Si cela apparait c'est que j'ai toujours pas compris les states (-_-)"}
        </>
    )
}

export default Pokemon;
