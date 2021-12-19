import {Routes, Route, NavLink} from "react-router-dom";

import List from "./Containers/List.jsx"
import Contact from "./Containers/Contact";

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
                        <NavLink to="/contact" className={({isActive}) => (isActive ? activeCSS : inactiveCSS)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<>You are on Homepage</>}/>
                <Route path="/pokemon" element={<List/>}/>
                <Route path="/pokemon/:name" element={<>Pokemon CNI</>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

        </>
    );
}

export default App;
