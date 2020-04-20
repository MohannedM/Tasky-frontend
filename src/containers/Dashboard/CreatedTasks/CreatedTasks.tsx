import React, {useEffect} from 'react';
import SingleTask from '../../../components/SingleTask/SingleTask';
import {CreatedTasksProps} from './CreatedTasks.module';
import CustomSpinner from '../../../components/CustomSpinner/CustomSpinner';
import { connect } from 'react-redux';
import { connectAllState } from '../../types.module';
import { Dispatch } from 'redux';
import { getTasksCreated, deleteTask, cleanTasks } from '../../../store/actions';

const CreatedTasks: React.FC<CreatedTasksProps> = React.memo(props => {
    const {onGetTasksCreated, token, onCleanTasks} = props;
useEffect(()=>{
    if(token){
        onGetTasksCreated(token);
    }
    return(()=>{
        onCleanTasks();
    })
}, [onGetTasksCreated, token, onCleanTasks]);
let tasks = props.tasksCreated.map(task => {
    let currentDate = new Date(task.dueDate);
    let taskDate = currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear()
    return(
        <div key={task._id}>
            <SingleTask usageIn="CreatedTasks" title={task.title} due_date={taskDate} task_id={task._id} onDeleteClicked={()=>props.onDeleteTask(props.token, task._id)} />
        </div>
    )
});
    return (
        <div className="scorllable-div" style={{position: "relative"}}>
            {props.deleteLoading ? <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" style={{position: "absolute"}}></span> : null}
            <div className="container">
            {props.loading ? <CustomSpinner /> : tasks}
            </div>
        </div>
    );
})
const mapStateToProps = (state: connectAllState) => {
    return{
        token: state.auth.token,
        tasksCreated: state.tasks.createdTasks,
        loading: state.tasks.loading,
        deleteLoading: state.tasks.deleteLoading
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        onGetTasksCreated: (token: string | null) => dispatch(getTasksCreated(token)),
        onDeleteTask: (token: string | null, task_id: string) => dispatch(deleteTask(token, task_id)),
        onCleanTasks: () => dispatch(cleanTasks())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatedTasks);