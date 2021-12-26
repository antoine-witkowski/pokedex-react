import {Link} from "react-router-dom";
import Button from "./Button";


const NoFavorites = () => {
    return (
        <>
        <div>No favorites yet</div>
            <Link to="/pokemon">
                <Button label="Go to Pokedex"
                        classList="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"/>
            </Link>
        </>
    )
}

export default NoFavorites;
