const TaskList = ({ taskList }) => {
    console.log(taskList);

    return (
        <div>
            <h3>Task List</h3>
            {taskList.map((elem) => {
                return (
                    <div>
                        <h4>{elem.workTitle}</h4>
                        <p>{elem.taskTitle}</p>
                        <p>{elem.assignee}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;