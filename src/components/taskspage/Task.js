import React from 'react';

const Task = (props) => {
    return (
        <div>
            {props.task.title}
            {props.task.status}
            {props.task.description}
        </div>
    );
};

export default Task;