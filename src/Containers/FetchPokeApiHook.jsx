import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const FetchPokeApiHook = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchData = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=251");
            const data = await response.json();
            const pokemons = data.results;

            setLoading(false);
            setData(pokemons);
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
            {Array.isArray(data) ? data.map(({name, url}, index) => {
                return (
                    <li key={index}
                        className="p-3 hover:bg-violet-600 hover:text-blue-200">
                        <Link to={`/pokemon/${name}`}>
                            #{index + 1} - {capitalizeFirstLetter(name)}
                        </Link>
                    </li>)
            }) : "Si cela apparait c'est que j'ai toujours pas compris les states (-_-)" }
        </>
    )
};

export default FetchPokeApiHook;
