import "./TaskForm.css";
import { useState } from "react";

const TaskForm = ({ setTaskList }) => {
  const [workTitle, setWorkTitle] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [assignor, setAssignor] = useState("");

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
      assignor,
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
        Task Form :: {workTitle} :: {taskTitle} :: {assignor}:: {assignee}
      </h3>
      {/* Work Title */}
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

      {/* Task Title */}
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

      {/* Assignor */}
      <div className="form-input-container">
        <label>Assignor</label>
        <select
          value={assignor}
          onChange={(e) => {
            setAssignor(e.target.value);
          }}
        >
          <option value="option">Select Teacher</option>
          <option value="Likhilesh">Likhilesh Sir</option>
          <option value="Amit">Amit Sir</option>
          <option value="Ashok">Ashok Sir</option>
        </select>
      </div>

      {/* Assignee */}
      <div className="form-input-container">
        <label>Assignee</label>
        <select
          value={assignee}
          onChange={(e) => {
            setAssignee(e.target.value);
          }}
        >
          <option value="option">Select Student</option>
          <option value="VKC">VKC</option>
          <option value="Vishal">Vishal</option>
          <option value="Abhi">Abhi</option>
        </select>
      </div>

      <button
        className="add-task"
        onClick={handleSubmitTask}
      >
        Add Task
      </button>

    </div>
  );
};

export default TaskForm