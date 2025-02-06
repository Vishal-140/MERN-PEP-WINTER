import React, { useEffect, useState } from 'react'
import './TaskList.css'

function TaskList() {
    const [list, setList] = useState([]);

    const getData = async () => {
        const resp = await fetch('http://localhost:1010/tasks');

        const respBody = await resp.json(resp);

        // list = respBody.data.tasks;
        const arrayOfTask = respBody.data.tasks;
        setList(arrayOfTask);

    }
    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="task-list-main">
            <h1 className="task-list-title">TaskList</h1>
            <div className="task-list-task-container"> 
            {list.map((elem) => {
                return (
                    <div>
                        <p>{elem.workTitle}</p>
                        <p>{elem.taskTitle}</p>
                    </div>
                    
                )
            })}
            </div>

        </div>
    )
}

export default TaskList;