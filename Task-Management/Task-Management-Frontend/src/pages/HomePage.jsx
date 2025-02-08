import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { useEffect, useState } from "react";
import './HomePage.css';

const HomePage = () => {
    const [list, setList] = useState([]);

    const getData = async () => {
        try {
            const resp = await fetch('http://localhost:1010/tasks');
            const respBody = await resp.json();
            const arrayOfTask = respBody.data.tasks;
            setList(arrayOfTask);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="home-page-container">
            <h2 className="page-title">Task Management Dashboard</h2>
            <div className="dashboard-layout">
                <aside className="sidebar">
                    <TaskForm getData={getData} />
                </aside>
                <main className="main-content">
                    <TaskList list={list} />
                </main>
            </div>
        </div>
    );
};

export default HomePage;