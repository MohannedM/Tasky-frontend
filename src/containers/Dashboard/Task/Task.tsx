import React, { useEffect } from 'react';
import './Task.css';
import { TaskProps } from './Task.module';
import CustomSpinner from '../../../components/CustomSpinner/CustomSpinner';
import { connectAllState } from '../../types.module';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getTask } from '../../../store/actions';
const Task: React.FC<TaskProps> = React.memo(props => {
    const {onGetTask, token, match} = props;
    useEffect(()=>{
        onGetTask(token, (match.params as {task_id: string;}).task_id)
    }, [onGetTask, token, match])
    let body = props.task ? (
        <div className="col-lg-8">

        <h1 className="mt-4">{props.task.title}</h1>

        <p className="lead">
          by {props.task!.createdBy.firstName + ' ' + props.task!.createdBy.lastName}  <small className="text-muted">Created on {props.task!.createdAt}</small>
        </p>

        <hr />
        <p>Assigned to {props.task!.assignedTo?.firstName + ' ' + props.task!.assignedTo?.lastName}</p>
        <p>Due on {new Date(props.task!.dueDate).getDate() + '-' + (new Date(props.task!.dueDate).getMonth() + 1) + '-' + new Date(props.task!.dueDate).getFullYear()}</p>
        <hr />
        <p className="lead">{props.task!.description}</p>
        <hr />
      </div>
    ) : null;

    return props.loading ? <CustomSpinner /> : body;
});

const mapStateToProps = (state: connectAllState) => {
    return{
        token: state.auth.token,
        loading: state.tasks.loading,
        task: state.tasks.task
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        onGetTask: (token: string | null, task_id: string) => dispatch(getTask(token, task_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);