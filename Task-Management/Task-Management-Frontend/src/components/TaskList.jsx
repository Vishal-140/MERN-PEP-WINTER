import { useState } from 'react';
import './TaskList.css'
import PropTypes from "prop-types";

function TaskList({ list }) {
    const [editTask, setEditTask] = useState(-1);
    const [editObject, setEditObject] = useState({});


    const handleEditField = (key, value) => {

        setEditObject((prev) => {
            const newObj = { ...prev };
            newObj[key] = value;
            return newObj;
        });
    };
    const handleEditData = async () => {
        const resp = await fetch(`http://localhost:1010/tasks/${editObject._id}`, {
            method: "PATCH",
            body: JSON.stringify(editObject),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const respObj = await resp.json();
        if (respObj.status === "success") {
            console.log("success :: updated");
        } else {
            alert(respObj.message);
        }
    }

    return (
        <div className="task-list-main">
            <h3 className="task-list-title">Task List</h3>
            <div className="task-list-task-container">
                {list.map((elem, index) => {
                    if (editTask === index) {
                        return (
                            <div key={elem._id} >
                                <form>
                                    <div>
                                        <label>Assignee</label>
                                        <input
                                            value={elem.assignee}
                                            onChange={(e) => {
                                                handleEditField("assignee", e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Priority</label>
                                        <select
                                            name="priority"
                                            value={elem.priority}
                                            onChange={(e) => {
                                                handleEditField("priority", e.target.value);
                                            }}
                                        >
                                            <option value="normal">Normal</option>
                                            <option value="low">Low</option>
                                            <option value="high">High</option>
                                            <option value="urgent">Urgent</option>
                                        </select>
                                    </div>
                                    <button onClick={handleEditData}>Submit Changes</button>
                                </form>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index}>
                                <h3>{index}</h3>
                                <p>{elem.workTitle}</p>
                                <p>{elem.taskTitle}</p>
                                <p>{elem.assignee}</p>
                                <p>{elem.assignor}</p>
                                <p>{elem.deadline}</p>
                                <p>{elem.priority}</p>
                                <p>{elem.status}</p>
                                <button
                                    onClick={() => {
                                        setEditObject(elem);
                                        setEditTask(index)
                                    }}>Edit</button>
                            </div>
                        );
                    }

                })}
            </div>
        </div>
    );
}

TaskList.propTypes = {
    list: PropTypes.array,
};

export default TaskList;