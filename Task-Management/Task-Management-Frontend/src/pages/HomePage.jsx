import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { useEffect, useState } from "react";
import './HomePage.css';
import TaskFilter from "../components/TaskFilter";

const HomePage = () => {
    const [list, setList] = useState([]);
    const [filterObj, setFilterObj] = useState({});

    const getData = async () => {

        try {
            const query = [];
            if (filterObj.priority) {
                query.push(`priority=${filterObj.priority}`);
            }
            console.log(query);

            const resp = await fetch(`http://localhost:1010/tasks?${query}`);

            // const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}\tasks`);
            const respBody = await resp.json();
            const arrayOfTask = respBody.data.tasks;
            setList(arrayOfTask);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    useEffect(() => {
        getData();
    }, [filterObj]);

    return (
        <div className="home-page-container">
            <h2 className="page-title">Task Management Dashboard</h2>
            <div className="dashboard-layout">
                <aside className="sidebar">
                    <TaskForm getData={getData} />
                </aside>
                <main className="main-content">
                    <TaskFilter setFilterObj={setFilterObj} />
                    <TaskList list={list} getData={getData} filterObj={{status : "todo"}} title={ "Todo List"}/>
                    <TaskList list={list} getData={getData} filterObj={{status : "done"}} title={ "Done List"}/>
                </main>
            </div>
        </div>
    );
};

export default HomePage;