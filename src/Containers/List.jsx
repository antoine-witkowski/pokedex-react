import FetchPokeApiHook from "./FetchPokeApiHook";

const List = () => {
    return (
        <div>
            <ul className="grid gap-4 grid-cols-5 grid-rows-3">
                <FetchPokeApiHook/>
            </ul>
        </div>
    )
}

export default List;
