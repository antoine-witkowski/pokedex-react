import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Button from "../Components/Button";

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
            <Link to="/pokemon">
                <Button label="Return to Pokedex"
                        classList="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"/>
            </Link>

            {Object.keys(pokemon).length !== 0 ?
                <div className="grid grid-cols-2 w-max bg-violet-200 border-black border-4 rounded-xl p-4 text-black">

                    <div className="FirstGrid">

                        <div className="w-90 bg-blue-200 border-black border-4 rounded-xl p-4 text-black">
                            <h2 className="capitalize text-4xl font-bold p-1 text-center">{pokemon.name}</h2>

                            <img width="200" className="mx-auto" src={pokemon.sprites.front_default}
                                 alt={pokemon.name}/>

                            <span>#{pokemon.id}</span>
                        </div>

                    </div>

                    <div className="SecondGrid">

                        <h4 className="text-2xl font-bold p-1 text-center">Statistics</h4>

                        <ul>
                            {pokemon.stats.map((stat, index) => (
                                <li key={index} className="capitalize m-1 p-1 rounded-xl flex flex-row-reverse">
                                    {stat.stat.name} : {stat.base_stat}
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className="ThirdGrid">

                        <ul className="flex flex-row">
                            {pokemon.types.map((type, index) => (
                                <li key={index}
                                    className={"capitalize border-2 border-black rounded-xl m-2 p-2 " + color_type[type.type.name]}>
                                    {type.type.name}
                                </li>
                            ))}
                        </ul>

                        <h4 className="text-2xl font-bold p-1 text-center">Abilities</h4>

                        <ul className="flex flex-row">
                            {pokemon.abilities.map((ability, index) => {
                                return index < 3 ?
                                    <li key={index} className="p-2 capitalize">
                                        {ability.ability.name}
                                    </li>
                                    : null
                            })}
                        </ul>

                    </div>

                    <div className="FourthGrid">

                        <div className="">
                            <div className="">Weight: {pokemon.weight} lbs</div>
                            <div className="">Height: {pokemon.height} "</div>
                        </div>

                    </div>

                </div>
                : "Si cela apparait c'est que j'ai toujours pas compris les states (-_-)"}
        </>
    )
}

export default Pokemon;
