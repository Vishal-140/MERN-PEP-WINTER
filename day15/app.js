// ES6 ES Modules
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./src/pages/dashboard";
import DummyTodos from "./src/pages/dummyTodos";
import HomePage from "./src/pages/homePage";
import AboutPage from "./src/pages/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router";

const domElement = document.getElementById("dom-root");
const reactRoot = ReactDOM.createRoot(domElement);

const App = () => {
    return (


        // <React.Fragment>
        <>
            {/* <Dashboard /> */}
            {/* <DummyTodos /> */}
            {/* <HomePage/> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage/>}></Route>
                </Routes>
            </BrowserRouter>

        </>
        // </React.Fragment>
    );
};
// currently i am not writting the code for routing
reactRoot.render(<App />);