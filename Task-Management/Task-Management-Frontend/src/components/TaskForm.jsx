import './TaskForm.css'
import PropTypes from "prop-types";

const TaskForm = ({ getData }) => {
    const addTask = async (obj) => {
        const resp = await fetch("http://localhost:1010/tasks", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const respObj = await resp.json();
        if (respObj == 'success') {
            console.log("Success");
            getData();
        } else {
            alert(respObj.message);
        }
    };

    const handleAddTask = (e) => {
        e.preventDefault();

        if (e.target.taskTitle.value.length > 0 && e.target.assignee.value.length > 0) {

            const dataObj = {
                taskTitle: e.target.taskTitle.value,
                assignee: e.target.assignee.value,
                deadline: e.target.deadline.value,
                priority: e.target.priority.value,
                assignor: "Rahul",
            };

            addTask(dataObj);
        } else {
            alert("Task Title and Assignee are required");
        }
    };

    return (
        <div>
            <form onSubmit={handleAddTask}>
                <div>
                    <label>Task Title</label>
                    <input type="text" name="taskTitle" required />
                </div>
                <div>
                    <label>Assignee</label>
                    <input type="text" name="assignee" required />
                </div>
                <div>
                    <label>Deadline</label>
                    <input type="date" name="deadline" />
                </div>
                <div>
                    <label>Priority</label>
                    <select name="priority">
                        <option value="normal">Normal</option>
                        <option value="low">Low</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </select>
                </div>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

TaskForm.propTypes = {
    getData: PropTypes.func.isRequired,
};

export default TaskForm;
