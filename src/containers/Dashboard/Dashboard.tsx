import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Dashboard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faTasks, faSortAmountUp} from '@fortawesome/free-solid-svg-icons';

const Dashboard: React.FC = React.memo(props=>{
    return (
        <Row className="full-row">
            <Col  xs={2} className="bg-light h-100 side-bar">
                <div className="sidebar-sticky d-flex justify-content-center align-items-center h-25">
                    <ul className="nav flex-column">
                        <li className="nav-item"><a href="/#" className="nav-link"><FontAwesomeIcon icon={faPlusSquare} /><small className="d-none d-lg-inline-block">&nbsp;Add Task</small></a></li>
                        <li className="nav-item"><a href="/#" className="nav-link"><FontAwesomeIcon icon={faTasks} /><small className="d-none d-lg-inline-block">&nbsp;Tasks Assigned</small></a></li>
                        <li className="nav-item"><a href="/#" className="nav-link"><FontAwesomeIcon icon={faSortAmountUp}/><small className="d-none d-lg-inline-block">&nbsp;Tasks Created</small></a></li>
                    </ul>

                </div>
            </Col>
            <Col xs={10}></Col>
        </Row>
    );
});

export default Dashboard;

