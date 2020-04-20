import React from 'react';
import {SingleTaskProps} from './SingleTask.module';
import { withRouter } from 'react-router-dom';

const SingleTask: React.FC<SingleTaskProps> = React.memo(props => {
    const showTaskHandler = (task_id: string) => {
        props.history.push("/tasks/" + task_id);
    }
    return(
        <div className="list-group border-rounded my-3">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {props.title} &nbsp;
                <span className="badge badge-primary badge-pill mr-auto">Due: {props.due_date}</span>
                <button className="btn btn-sm btn-success badge-pill" onClick={() => showTaskHandler(props.task_id)}>Show</button>
                &nbsp;
                {props.usageIn === "CreatedTasks" ? <button className="btn btn-sm btn-danger badge-pill" onClick={props.onDeleteClicked!}>Delete</button> : null}
            </li>
        </div>
    );
});

export default withRouter(SingleTask);