import {useContext, useEffect, useState} from "react";
import MainContext from "../contexts/FetchPokedex";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import FormSelectType from "../components/FormSelectType";

const Filter = () => {

    const {type} = useParams();

    const [filter, setFilter] = useState(1);


    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const {color_type} = useContext(MainContext);

    const fetchData = async () => {
        try {
            switch (type) {
                case "normal":
                    setFilter(1);
                    break;
                case "fighting":
                    setFilter(2);
                    break;
                case "flying":
                    setFilter(3);
                    break;
                case "poison":
                    setFilter(4);
                    break;
                case "ground":
                    setFilter(5);
                    break;
                case "rock":
                    setFilter(6);
                    break;
                case "bug":
                    setFilter(7);
                    break;
                case "ghost":
                    setFilter(8);
                    break;
                case "steel":
                    setFilter(9);
                    break;
                case "fire":
                    setFilter(10);
                    break;
                case "water":
                    setFilter(11);
                    break;
                case "grass":
                    setFilter(12);
                    break;
                case "electric":
                    setFilter(13);
                    break;
                case "psychic":
                    setFilter(14);
                    break;
                case "ice":
                    setFilter(15);
                    break;
                case "dragon":
                    setFilter(16);
                    break;
                case "dark":
                    setFilter(17);
                    break;
                case "fairy":
                    setFilter(18);
                    break;
                default:
                    setFilter(1);
            }
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

    if (error) {return (<><Error/></>);}

    if (loading) {return(<><Loading/></>)}


    return (
        <>
            <FormSelectType/>

            {Object.keys(data).length !== 0 ?
                <>
                    <div>
                        <span className="center text-2xl font-bold">{data.pokemon.length}</span>
                        <span> pokemons found</span>
                    </div>

                    <h3 className={"text-center text-2xl font-bold uppercase border-2 border-black rounded-xl m-2 p-2 " + color_type[data.name]}>{data.name}</h3>

                    <ul className="grid gap-4 grid-cols-8 grid-rows-3">
                        {Array.isArray(data.pokemon) ? data.pokemon.map(({pokemon}, index) => {
                            return (
                                <li key={index}
                                    //className={"capitalize flex flex-row p-3 hover:bg-blue-500 hover:text-blue-200"}
                                    className={"border capitalize flex flex-row p-3 hover:" + color_type[data.name] + " hover:text-blue-200"}
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
