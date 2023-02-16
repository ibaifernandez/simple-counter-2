import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Provider from "./context/Provider.jsx";

import "../styles/index.css";

import Layout from "./component/Layout.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Provider>
                <Routes>
                    <Route path="/" element={<Layout />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.querySelector("#app"));
