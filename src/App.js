import {Routes, Route, NavLink} from "react-router-dom";

import Pokedex from "./Containers/Pokedex.jsx"
import Contact from "./Containers/Contact";
import Pokemon from "./Containers/Pokemon";
import Favorites from "./Components/Favorites";
import Filter from "./Containers/Filter";

function App() {
    const activeCSS = "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-purple-700 font-semibold"
    const inactiveCSS = "bg-white inline-block py-2 px-4 text-gray-400 font-semibold";
    return (
        <>
            <h1 className="text-2xl font-bold">Welcome on Vitkov Pokedex</h1>
            <nav>
                <ul className="flex border-b">
                    <li className="-mb-px mr-1">
                        <NavLink to="/" className={({isActive}) => ( isActive ? activeCSS : inactiveCSS )}>
                            Home
                        </NavLink>
                    </li>
                    <li className="-mb-px mr-1">
                        <NavLink to="/pokemon" className={({isActive}) => (isActive ? activeCSS : inactiveCSS)}>
                            Pokemon List
                        </NavLink>
                    </li>
                    <li className="-mb-px mr-1">
                        <NavLink to="/type" className={({isActive}) => (isActive ? activeCSS : inactiveCSS)}>
                            Pokemon Filter Type
                        </NavLink>
                    </li>
                    <li className="-mb-px mr-1">
                        <NavLink to="/favorites" className={({isActive}) => (isActive ? activeCSS : inactiveCSS)}>
                            Favorites
                        </NavLink>
                    </li>
                    <li className="-mb-px mr-1">
                        <NavLink to="/contact" className={({isActive}) => (isActive ? activeCSS : inactiveCSS)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<>You are on Homepage</>}/>
                <Route path="/pokemon" element={<Pokedex/>}/>
                <Route path="/pokemon/:name" element={<Pokemon/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/type" element={<Filter/>}/>
            </Routes>

        </>
    );
}

export default App;
