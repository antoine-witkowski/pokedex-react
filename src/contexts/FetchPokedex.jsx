import {createContext, useEffect, useState} from "react";
import Error from "../components/Error";
import Loading from "../components/Loading";

const MainContext = createContext({});

const Provider = ({ children }) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [favorites, setFavorites] = useState(localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [])
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

    if (error) {return (<><Error/></>);}

    if (loading) {return(<><Loading/></>)}

    return (
        <MainContext.Provider value={{ addToFavorites, error, loading, data, favorites, color_type }}>
            {children}
        </MainContext.Provider>
    );
};

export { Provider };
export default MainContext;
