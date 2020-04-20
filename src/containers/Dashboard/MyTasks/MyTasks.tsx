import React, { useEffect } from 'react';
import SingleTask from '../../../components/SingleTask/SingleTask';
import {MyTasksProps} from './MyTasks.module';
import { connectAllState } from '../../types.module';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getMyTasks, cleanTasks } from '../../../store/actions';
import CustomSpinner from '../../../components/CustomSpinner/CustomSpinner';

const MyTasks: React.FC<MyTasksProps> = React.memo(props => {
    const {onGetMyTasks, token, onCleanTasks} = props;
    useEffect(()=>{
        if(token){
            onGetMyTasks(token);
        }
        return(()=>{
            onCleanTasks();
        })
    }, [onGetMyTasks, token, onCleanTasks]);
    let tasks = props.myTasks.map(task => {
        let currentDate = new Date(task.dueDate);
        let taskDate = currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear()
        return(
            <div key={task._id}>
                <SingleTask usageIn="MyTasks" title={task.title} due_date={taskDate} task_id={task._id} />
            </div>
        )
    });
    return (
        <div className="scorllable-div">
            <div className="container">
            {props.loading ? <CustomSpinner /> : tasks}
            </div>
        </div>
    );
})

const mapStateToProps = (state: connectAllState) =>{
    return{
        token: state.auth.token,
        loading: state.tasks.loading,
        myTasks: state.tasks.myTasks
    }
}

const mapDipatchToProps = (dispatch: Dispatch) => {
    return{
        onGetMyTasks: (token: string | null) => dispatch(getMyTasks(token)),
        onCleanTasks: () => dispatch(cleanTasks())
    }
} 

export default connect(mapStateToProps, mapDipatchToProps)(MyTasks);