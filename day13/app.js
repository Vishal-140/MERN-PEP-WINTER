import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskPage from './src/pages/TaskPage';

const domRoot = document.getElementById('dom-root');
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    return(
        <div>
            <h1>hello</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <TaskPage/>
        </div>
    );
};


reactRoot.render(App());