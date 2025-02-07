import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { useEffect, useState } from "react";
import TaskFilter from "../components/TaskFilter";

const HomePage = () => {

    const [list, setList] = useState([]);

    const getData = async () => {
        const resp = await fetch('http://localhost:1010/tasks');

        const respBody = await resp.json(resp);

        // list = respBody.data.tasks;
        const arrayOfTask = respBody.data.tasks;
        setList(arrayOfTask);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h2>Welcome to Task Management Home Page!</h2>
            <TaskForm getData={getData}/>
            <TaskFilter/>
            <TaskList list={list}/>
        </div>
    );
};

export default HomePage;