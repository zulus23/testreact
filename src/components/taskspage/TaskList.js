import React, {Component} from 'react';

const  TaskList = (props) => {
    return (
        <div className="task">
            <div className="task-header">
                <div>{props.tasks.title}</div>
            </div>

            <hr />
            <div className="task-body">{props.tasks.description}</div>
        </div>
    )
}

export default TaskList;