import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


import {Provider as MainProvider} from "./contexts/FetchPokedex";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainProvider>
                <App/>
            </MainProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
