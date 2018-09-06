import React from 'react';
import {TASK_STATUSES} from "../../utils/utils";

const Task = (props) => {


    function onStatusChange(e) {
        props.onStatusChange(props.task.id,e.target.value)
    }

    return (
        <div className="task">
            <div className="task-header">
                <div> {props.task.title}</div>

                <select value={props.task.status} onChange={onStatusChange}>
                    {TASK_STATUSES.map(status => (

                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>
            </div>
            <div className="task-body">{props.task.description}</div>
        </div>
    );
};

export default Task;