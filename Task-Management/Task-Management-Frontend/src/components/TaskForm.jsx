import { useState } from 'react';
import './TaskForm.css';
import PropTypes from "prop-types";

const TaskForm = ({ getData }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const addTask = async (obj) => {
        try {
            setIsSubmitting(true);
            const resp = await fetch("http://localhost:1010/tasks", {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const respObj = await resp.json();
            if (respObj.status === 'success') {
                getData();
                // Reset form
                document.querySelector('form').reset();
            } else {
                alert(respObj.message || 'Error adding task');
            }
        } catch (error) {
            alert('Error adding task. Please try again.', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleAddTask = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const taskTitle = formData.get('taskTitle').trim();
        const assignee = formData.get('assignee').trim();

        if (taskTitle && assignee) {
            const dataObj = {
                taskTitle,
                assignee,
                deadline: formData.get('deadline'),
                priority: formData.get('priority'),
                assignor: "Rahul",
            };

            addTask(dataObj);
        } else {
            alert("Task Title and Assignee are required");
        }
    };

    return (
        <div className="task-form-container">
            <h3 className="form-title">Add New Task</h3>
            <form onSubmit={handleAddTask}>
                <div className="form-group">
                    <label htmlFor="taskTitle">Task Title</label>
                    <input 
                        type="text" 
                        id="taskTitle"
                        name="taskTitle" 
                        placeholder="Enter task title"
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="assignee">Assignee</label>
                    <input 
                        type="text" 
                        id="assignee"
                        name="assignee" 
                        placeholder="Enter assignee name"
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="deadline">Deadline</label>
                    <input 
                        type="date" 
                        id="deadline"
                        name="deadline" 
                        min={new Date().toISOString().split('T')[0]}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select 
                        id="priority"
                        name="priority" 
                        defaultValue="normal"
                    >
                        <option value="normal">Normal</option>
                        <option value="low">Low</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </select>
                </div>
                
                <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Adding Task...' : 'Add Task'}
                </button>
            </form>
        </div>
    );
};

TaskForm.propTypes = {
    getData: PropTypes.func.isRequired,
};

export default TaskForm;