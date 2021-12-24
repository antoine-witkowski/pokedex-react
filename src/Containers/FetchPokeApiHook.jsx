import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Button from "../Components/Button";

const FetchPokeApiHook = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [favorites, setFavorites] = useState(localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [])

    const addToFavorites = (index) => {
        const tmpFavorites = favorites;
        tmpFavorites[index].favorite = !tmpFavorites[index].favorite
        setFavorites(tmpFavorites);
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
                        className="flex flex-row p-3 hover:bg-violet-600 hover:text-blue-200">
                        <div className="basis-3/4">
                            <Link to={`/pokemon/${name}`}>
                                #{index + 1} - <span className="capitalize">{name}</span>
                            </Link>
                        </div>
                        <div className="basis-1/4">
                            <Button label="+" onClick={addToFavorites}
                                    classList="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"/>
                        </div>
                    </li>)
            }) : "Si cela apparait c'est que j'ai toujours pas compris les states (-_-)"}
        </>
    )
};

export default FetchPokeApiHook;
