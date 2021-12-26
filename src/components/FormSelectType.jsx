import LogoClick from "./LogoClick";

const FormSelectType = () => {

    const selectClick = (event) => {
        window.history.pushState('', '', `/type/${event.target.value}`);
        window.location.reload(false);
    }

    return (
        <form>
            <div>
            <LogoClick/>
            </div>
            <label className="text-purple-700">
                Select a pokemon type :
                <select
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    onClick={selectClick}>
                    <option value="normal" className="font-bold bg-gray-500">Normal</option>
                    <option value="fighting" className="font-bold bg-red-900">Fighting</option>
                    <option value="flying" className="font-bold bg-indigo-600">Flying</option>
                    <option value="poison" className="font-bold bg-purple-600">Poison</option>
                    <option value="ground" className="font-bold bg-yellow-700">Ground</option>
                    <option value="rock" className="font-bold bg-yellow-600">Rock</option>
                    <option value="bug" className="font-bold bg-green-400">Bug</option>
                    <option value="ghost" className="font-bold bg-indigo-700">Ghost</option>
                    <option value="steel" className="font-bold bg-gray-400">Steel</option>
                    <option value="fire" className="font-bold bg-red-400">Fire</option>
                    <option value="water" className="font-bold bg-blue-500">Water</option>
                    <option value="grass" className="font-bold bg-green-600">Grass</option>
                    <option value="electric" className="font-bold bg-yellow-400">Electric</option>
                    <option value="psychic" className="font-bold bg-pink-700">Psychic</option>
                    <option value="ice" className="font-bold bg-blue-400">Ice</option>
                    <option value="dragon" className="font-bold bg-purple-800">Dragon</option>
                    <option value="dark" className="font-bold bg-gray-800">Dark</option>
                    <option value="fairy" className="font-bold bg-pink-400">Fairy</option>
                </select>
            </label>
        </form>
    );
}

export default FormSelectType;
