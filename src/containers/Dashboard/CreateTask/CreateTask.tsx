import React, { useState, useEffect } from 'react';
import {Form, Button} from 'react-bootstrap';
import { validationFormType, connectAllState } from '../../types.module';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getUsersInfo, createTask } from '../../../store/actions';
import {createTaskProps} from './CreateTask.module';
import { taskDataType } from '../../../store/types/tasks.module';
import { Redirect } from 'react-router-dom';

const CreateTask: React.FC<createTaskProps> = React.memo(props => {
    const {token, onGetUsersInfo} = props;
    useEffect(()=>{
        onGetUsersInfo(token);
    }, [token, onGetUsersInfo]);
    const [taskForm, setTaskForm] = useState<validationFormType>({
           title: {
            value: '',
            valid: false,
            minLength: 5,
            maxLength: 50,
            touched: false,
            error: null
           },
           due_date: {
            value: '',
            valid: false,
            minLength: 6,
            maxLength: 11,
            touched: false,
            error: null
           },
           description: {
            value: '',
            valid: false,
            minLength: 20,
            maxLength: 250,
            touched: false,
            error: null
           },
           assign_to: {
            value: '',
            valid: false,
            minLength: 10,
            maxLength: 50,
            touched: false,
            error: null
           }    
        });
    const setInputHandler = (event: React.SyntheticEvent, property: 'title' | 'due_date' | 'description' | 'assign_to') => {
        event.persist();
        if((event.target as HTMLInputElement).value.length < taskForm[property].minLength || (event.target as HTMLInputElement).value.length > taskForm[property].maxLength){
            setTaskForm((prevValue: validationFormType) => {
                return{
                    ...prevValue,
                    [property]:{
                        ...prevValue[property],
                        value: (event.target as HTMLInputElement).value,
                        touched: true,
                        error: 'Please enter a ' + property.split('_').join(' ') + ' of more than ' + prevValue[property].minLength + ' and less than ' + prevValue[property].maxLength + ' characters.'
                    }
                }
            });
        }else{
            setTaskForm((prevValue: validationFormType) => {
                return{
                    ...prevValue,
                    [property]:{
                        ...prevValue[property],
                        value: (event.target as HTMLInputElement).value,
                        touched: true,
                        error: null
                    }
                }
            });
        }
    }

    let allValid = false;
    for(let inputObj in taskForm){
        if(!taskForm[inputObj].error && taskForm[inputObj].touched){
            allValid = true;
        }else{
            allValid = false;
            break;
        }
    }
    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const title = taskForm.title.value;
        const description = taskForm.description.value;
        const due_date = new Date(taskForm.due_date.value).getTime();
        const assigned_to = taskForm.assign_to.value;
        props.onCreateTask(props.token, {
            title,
            description,
            dueDate: due_date,
            assignedTo: assigned_to
        });
    }
    const usersOptions = props.users ? props.users.map(user=>{
        return(
            <option key={user.id} value={user.id}>{user.name}</option>
        )
    }) : null;
    return (
        <div className="scorllable-div">
            {props.createRedirect ? <Redirect to="/tasks" /> : null}
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control size="sm" type="text" placeholder="New task" onChange={(event: React.SyntheticEvent)=>setInputHandler(event, "title")} />
                <p className="text-muted"><small className="text-danger">{taskForm.title.error}</small></p>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Due Date</Form.Label>
                <Form.Control size="sm" type="date"  onChange={(event: React.SyntheticEvent)=>setInputHandler(event, "due_date")} />
                {taskForm.due_date.error ? <p className="text-muted"><small className="text-danger">Please enter a date</small></p> : null}
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control size="sm" as="textarea" rows="3" style={{resize: 'none'}}  onChange={(event: React.SyntheticEvent)=>setInputHandler(event, "description")} />
                <p className="text-muted"><small className="text-danger">{taskForm.description.error}</small></p>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Assign To</Form.Label>
                <Form.Control size="sm" as="select" onChange={(event: React.SyntheticEvent)=>setInputHandler(event, "assign_to")}>
                <option className="text-muted">(Please chose a member to assign the task)</option>
                {usersOptions}
                </Form.Control>
            </Form.Group>
            <Button className="primary" disabled={!allValid || props.loading} onClick={submitHandler}>

                Create Task
               {props.loading ? <>&nbsp;<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></> : null}
            </Button>
        </Form>
        </div>
    );
})
const mapStateToProps = (state: connectAllState) => {
    return{
        token: state.auth.token,
        users: state.tasks.users,
        loading: state.tasks.loading,
        createRedirect: state.tasks.createRedirect
    }
}

const mapDisptachToProps = (dispatch: Dispatch) => {
    return{
        onGetUsersInfo: (token: string | null) => dispatch(getUsersInfo(token)),
        onCreateTask: (token: string | null, taskData: taskDataType) => dispatch(createTask(token, taskData))
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(CreateTask);