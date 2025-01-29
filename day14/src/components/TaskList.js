import './TaskList.css'


const TaskList = ({ taskList }) => {
  console.log(taskList);

  return (
      <div>
          <h3 className="tasklist-title">Task List</h3>
          {taskList.map((elem) => {
              return (
                  <div className="tasklist">
                      <h4>{elem.workTitle}</h4>
                      <p>{elem.taskTitle}</p>
                      <p>{elem.assignor}</p>
                      <p>{elem.assignee}</p>
                  </div>
              );
          })}
      </div>
  );
};

export default TaskList;