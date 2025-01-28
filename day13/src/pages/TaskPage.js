import React from 'react'

function TaskPage() {
    console.log("TaskPage execution started")
    let user = 'Vishal'
    const handleReactInput = (e) =>{
        // console.log(e);
        console.log(e.target.value);
    }
    
    return (
        <div className='task-page'>
            <h1>TaskPage</h1>
            <h2>This is a task page from <span>{user}</span></h2>
            <input className="user-input"
                onChange={handleReactInput} />
        </div>
    )
}

export default TaskPage;