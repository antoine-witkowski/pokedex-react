import {useEffect, useState} from "react";

const Filter = () => {

    const [filter, setFilter] = useState(17);

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
            console.log(filter);
            console.log("filter");
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
    }, []);

    if (error) {
        return <div>ERROR</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFilter(event.target[0].value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="filter">Enter a pokemon type : </label>
                <input type="number" name="filter"/>
            </form>

            <div>{filter}</div>

            {Object.keys(data).length !== 0 ?
                <>
                    <span>{data.pokemon.length} pokemons found</span>
                    <h3 className={"uppercase " + color_type[data.name]}>{data.name}</h3>
                    <ul className="grid gap-4 grid-cols-5 grid-rows-3">
                    {Array.isArray(data.pokemon) ? data.pokemon.map(({pokemon}, index) => {
                        return (
                            <li key={index}
                                //className={"capitalize flex flex-row p-3 hover:bg-green-400 hover:text-blue-200"}
                                className={"capitalize flex flex-row p-3 " + color_type[data.name] + " hover:bg-purple-600 hover:text-blue-200"}
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
