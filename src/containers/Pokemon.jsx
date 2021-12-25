import {Link, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Button from "../components/Button";
import scale_logo from "../assets/electronic-scale.png";
import ladder_logo from "../assets/ladder.png";
import MainContext from "../contexts/FetchPokedex";

const Pokemon = () => {

    const {name} = useParams();

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState({});

    const { color_type } = useContext(MainContext);

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
                                <Link to={`/type/${type.type.name}`}>
                                    <li key={index}
                                        className={"capitalize border-2 border-black rounded-xl m-2 p-2 " + color_type[type.type.name]}>
                                        {type.type.name}
                                    </li>
                                </Link>
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

                        <div className="grid grid-cols-2">
                            <div>{pokemon.weight} lbs</div>
                            <div><img src={scale_logo} alt="weight" width="60"/></div>
                            <div>{pokemon.height} "</div>
                            <div><img src={ladder_logo} alt="height" width="60"/></div>
                        </div>

                    </div>

                </div>
                : "Si cela apparait c'est que j'ai toujours pas compris les states (-_-)"}
        </>
    )
}

export default Pokemon;
