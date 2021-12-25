import {useContext} from "react";
import MainContext from "../contexts/FetchPokedex";
import {Link} from "react-router-dom";
import Button from "../components/Button";

const Pokedex = () => {
    const { addToFavorites, data } = useContext(MainContext);

    return (
        <div>
            <ul className="grid gap-4 grid-cols-5 grid-rows-3">

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
            </ul>
        </div>
    )
}

export default Pokedex;
