import {createContext, useEffect, useState} from "react";

const MainContext = createContext({});

const Provider = ({ children }) => {
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
        <MainContext.Provider value={{ addToFavorites, error, loading, data, favorites }}>
            {children}
        </MainContext.Provider>
    );
};

export { Provider };
export default MainContext;
