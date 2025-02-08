import { useState } from 'react';
import './TaskList.css';
import PropTypes from "prop-types";

function TaskList({ list, getData }) {
    const [editTask, setEditTask] = useState(-1);
    const [editObject, setEditObject] = useState({});

    const handleEditField = (key, value) => {
        setEditObject((prev) => ({
            ...prev,
            [key]: value
        }));
    };

    const handleDelete = async (taskId) => {
        const resp = await fetch(`http://localhost:1010/tasks/${taskId}`, {
            method: "DELETE",
        });

        const respObj = await resp.json();
        if (respObj.status === "success") {
            console.log("success :: deleted");
        } else {
            alert(respObj.message);
        }
    };

    const handleEditData = async () => {
        try {
            const resp = await fetch(`http://localhost:1010/tasks/${editObject._id}`, {
                method: "PATCH",
                body: JSON.stringify(editObject),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const respObj = await resp.json();
            if (respObj.status === "success") {
                setEditTask(-1);
                setEditObject({});
                getData();
            } else {
                alert(respObj.message);
            }
        } catch (error) {
            alert("Error updating task", error);
        }
    };

    const getPriorityClass = (priority) => {
        return `priority-badge priority-${priority.toLowerCase()}`;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    return (
        <div className="task-list-main">
            <h3 className="task-list-title">Task List</h3>
            <div className="task-list-task-container">
                {list.map((elem, index) => (
                    <div key={elem._id || index} className="task-card">
                        <h3>Task No. {index + 1}</h3>

                        {elem.workTitle && <p><strong>Work Title:</strong> {elem.workTitle}</p>}
                        <p><strong>Task:</strong> {elem.taskTitle}</p>

                        {index === editTask ? (
                            <div className="edit-form">
                                <div className="form-group">
                                    <label>Assignee</label>
                                    <input
                                        value={editObject.assignee || ""}
                                        onChange={(e) => handleEditField("assignee", e.target.value)}
                                    />
                                </div>
                            </div>
                        ) : (
                            <p><strong>Assignee:</strong> {elem.assignee}</p>
                        )}

                        <p><strong>Assigned by:</strong> {elem.assignor}</p>
                        <p><strong>Deadline:</strong> {formatDate(elem.deadline)}</p>

                        {index === editTask ? (
                            <div className="edit-form">
                                <div className="form-group">
                                    <label>Priority</label>
                                    <select
                                        name="priority"
                                        value={editObject.priority || ""}
                                        onChange={(e) => handleEditField("priority", e.target.value)}
                                    >
                                        <option value="normal">Normal</option>
                                        <option value="low">Low</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </div>
                            </div>
                        ) : (
                            <p>
                                <strong>Priority:</strong>{" "}
                                <span className={getPriorityClass(elem.priority)}>
                                    {elem.priority}
                                </span>
                            </p>
                        )}

                        {elem.status && <p><strong>Status:</strong> {elem.status}</p>}

                        {index === editTask ? (
                            <div className="button-group">
                                <button className="edit-button" onClick={handleEditData}>
                                    Save Changes
                                </button>
                                <button
                                    className="edit-button cancel-button"
                                    onClick={() => {
                                        setEditTask(-1);
                                        setEditObject({});
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <>
                                <button
                                    className="edit-button"
                                    onClick={() => {
                                        setEditObject(elem);
                                        setEditTask(index);
                                    }}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-button"
                                    onClick={() => handleDelete(elem._id)}>Delete
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

TaskList.propTypes = {
    list: PropTypes.array.isRequired,
    getData: PropTypes.func,
};

export default TaskList;