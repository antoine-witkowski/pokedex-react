import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Button from "../Components/Button";

const Filter = () => {

    const [filter, setFilter] = useState(16);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
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
            const response = await fetch(`https://pokeapi.co/api/v2/type/${Number(filter)}`);
            const data = await response.json();

            setLoading(false);
            setData(data);
        } catch (err) {
            setError(true);
            throw err;
        }
    };

    useEffect(() => {
        fetchData();
    }, [filter]);

    if (error) {
        return (
            <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">ERROR</div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">TYPE
                    does not exist
                </div>
            </div>
        );
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <>
            <form>
                <label className="text-purple-700">
                    Select a pokemon type :
                    <select
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        value={filter} onChange={handleChange}>
                        <option value="1">Normal</option>
                        <option value="2">Fighting</option>
                        <option value="3">Flying</option>
                        <option value="4">Poison</option>
                        <option value="5">Ground</option>
                        <option value="6">Rock</option>
                        <option value="7">Bug</option>
                        <option value="8">Ghost</option>
                        <option value="9">Steel</option>
                        <option value="10">Fire</option>
                        <option value="11">Water</option>
                        <option value="12">Grass</option>
                        <option value="13">Electric</option>
                        <option value="14">Psychic</option>
                        <option value="15">Ice</option>
                        <option value="16">Dragon</option>
                        <option value="17">Dark</option>
                        <option value="18">Fairy</option>
                    </select>
                </label>
            </form>

            {Object.keys(data).length !== 0 ?
                <>
                    <div>
                        <span className="center text-2xl font-bold">{data.pokemon.length}</span>
                        <span> pokemons found</span>
                    </div>

                    <h3 className={"text-center text-2xl font-bold uppercase border-2 border-black rounded-xl m-2 p-2 " + color_type[data.name]}>{data.name}</h3>

                    <ul className="grid gap-4 grid-cols-5 grid-rows-3">
                        {Array.isArray(data.pokemon) ? data.pokemon.map(({pokemon}, index) => {
                            return (
                                <li key={index}
                                    //className={"capitalize flex flex-row p-3 hover:bg-blue-500 hover:text-blue-200"}
                                    className={"capitalize flex flex-row p-3 hover:" + color_type[data.name] + " hover:text-blue-200"}
                                >
                                    {pokemon.name}
                                </li>
                            )
                        }) : "non"}
                    </ul>
                </>
                : "Si cela apparait c'est que j'ai toujours pas compris les states (-_-)"}

        </>
    )
}

export default Filter;
