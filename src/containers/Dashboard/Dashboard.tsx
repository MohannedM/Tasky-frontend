import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Dashboard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faTasks, faSortAmountUp} from '@fortawesome/free-solid-svg-icons';
import MyTasks from './MyTasks/MyTasks';
import CreateTask from './CreateTask/CreateTask';
import CreatedTasks from './CreatedTasks/CreatedTasks';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {DashboardProps} from './Dashboard.module';
import { connectAllState } from '../types.module';
import Task from './Task/Task';
import { Dispatch } from 'redux';
import { dismissTasksError } from '../../store/actions';
import CustomModal from '../../components/CustomModal/CutsomModal';

const Dashboard: React.FC<DashboardProps> = React.memo(props=>{
    return (
        <Row className="full-row">
            <CustomModal error={props.error} handleClose={props.onDismissError} />
            {!props.isAuth ? <Redirect to="/" /> : null}
            <Col  xs={2} className="bg-light h-100 side-bar py-3">
                <div className="sidebar-sticky d-flex justify-content-center align-items-center h-25">
                    <ul className="nav flex-column">
                        <li className="nav-item"><NavLink to="/tasks/create" className="nav-link"><small><FontAwesomeIcon icon={faPlusSquare} /><span className="d-none d-lg-inline-block">&nbsp;Add Task</span></small></NavLink></li>
                        <li className="nav-item"><NavLink to="/tasks/assigned" className="nav-link"><small><FontAwesomeIcon icon={faTasks} /><span className="d-none d-lg-inline-block">&nbsp;Tasks Assigned</span></small></NavLink></li>
                        <li className="nav-item"><NavLink to="/tasks" className="nav-link"><small><FontAwesomeIcon icon={faSortAmountUp}/><span className="d-none d-lg-inline-block">&nbsp;Tasks Created</span></small></NavLink></li>
                    </ul>
                </div>
            </Col>
            <Col xs={10}>
                <div className="container py-3">
                    <Switch>
                        <Route path="/tasks/create" component={CreateTask} />
                        <Route path="/tasks/assigned" component={MyTasks} />
                        <Route path="/tasks/:task_id" component={Task} />
                        <Route path="/tasks" component={CreatedTasks} />
                    </Switch>
                </div>
            </Col>
        </Row>
    );
});
const mapStateToProps = (state: connectAllState) => {
    return{
        isAuth: state.auth.token !== null,
        error: state.tasks.error
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        onDismissError: () => dispatch(dismissTasksError())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

