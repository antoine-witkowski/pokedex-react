import {useContext} from "react";
import MainContext from "../contexts/FetchPokedex";
import NoFavorites from "./NoFavorites";

const Favorites = () => {

    const {favorites} = useContext(MainContext);

    if (favorites.length === 0) {return (<><NoFavorites/></>);}

    return (
        <>
            <h2>Favorites Pokemon</h2>
            <ul>
                {favorites.map(({favorite}, index) => {
                    return (
                        <li key={index}>
                            favorite
                        </li>
                    )
                })}
            </ul>
        </>

    );
}

export default Favorites;
