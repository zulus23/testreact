import React from 'react';
import {TASK_STATUSES} from "../../utils/utils";

const Task = (props) => {


    function onStatusChange() {

    }

    return (
        <div>

            <div> {props.task.title}</div>
            <select value={props.task.status} onChange={onStatusChange}>
                {TASK_STATUSES.map(status => (

                    <option key={status} value={status}>{status}</option>
                ))}
            </select>

            <div>{props.task.description}</div>
        </div>
    );
};

export default Task;