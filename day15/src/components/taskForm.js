import "./taskForm.css";
import { useState } from "react";

const TaskForm = ({ setTaskList }) => {
    const [workTitle, setWorkTitle] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [assignee, setAssignee] = useState("Vishal");

    const handleWorkTitleChange = (e) => {
        setWorkTitle(e.target.value);
    };

    const handleTaskTitleChange = (e) => {
        setTaskTitle(e.target.value);
    };

    const handleSubmitTask = () => {
        const obj = {
            workTitle,
            taskTitle,
            assignee,
            assignor: "Likhilesh",
        };

        setTaskList((prev) => {
            // logic
            // then return new state
            const newArr = [...prev]; // after this line, values remain the same,
            //                           new reference is returned so that react understand that array has changed
            newArr.push(obj);
            return newArr;
        });
    };

    return (
        <div className="task-form">
            <h3>
                Task Form :: {workTitle} :: {taskTitle} :: {assignee}
            </h3>
            <div className="form-input-container">
                <label>Work Title</label>
                <input
                    type="text"
                    name="work-title"
                    placeholder="Type here..."
                    value={workTitle}
                    onChange={handleWorkTitleChange}
                ></input>
            </div>
            <div className="form-input-container">
                <label>Task Title</label>
                <input
                    type="text"
                    name="task-title"
                    placeholder="Type here..."
                    value={taskTitle}
                    onChange={handleTaskTitleChange}
                ></input>
            </div>
            <div className="form-input-container">
                <label>Assignee</label>
                <select
                    value={assignee}
                    onChange={(e) => {
                        setAssignee(e.target.value);
                    }}
                >
                    <option value="Raj">Raj</option>
                    <option value="Vishal">Vishal</option>
                    <option value="Shubhanshu">Shubhanshu</option>
                </select>
            </div>
            <button onClick={handleSubmitTask}>Add Task</button>
        </div>
    );
};

export default TaskForm;

// {/*
//                 UN-CONTROLLED Component :: it is NOT controlled by REACT
//                 :: --> IT is controlled by DOM / HTMl / Browser

//                 <input type="text" name="task-title" placeholder="Type here..."></input>
//                 */}