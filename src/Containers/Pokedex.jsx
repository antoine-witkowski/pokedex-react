import FetchPokeApiHook from "./FetchPokeApiHook";

const Pokedex = () => {
    return (
        <div>
            <ul className="grid gap-4 grid-cols-5 grid-rows-3">
                <FetchPokeApiHook/>
            </ul>
        </div>
    )
}

export default Pokedex;
