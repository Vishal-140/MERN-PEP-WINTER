// ES6 ES Modules
import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./src/pages/Dashboard";



const domElement = document.getElementById("dom-root");
const reactRoot = ReactDOM.createRoot(domElement);

const App = () => {
    return (
    <>
        <Dashboard />
    </>
    );
};

reactRoot.render(<App />);