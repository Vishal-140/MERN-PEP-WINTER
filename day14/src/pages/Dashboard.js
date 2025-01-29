import { useState } from 'react';
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import './Dashboard.css'


const Dashboard = () => {
  const [taskList, setTaskList] = useState([]);
  return (
      <div className="dashboard-container">
          <h1 className="title">Dashboard for Tasks</h1>
          <TaskForm setTaskList={setTaskList} />
          <TaskList taskList={taskList} />
      </div>
  );
};

export default Dashboard;