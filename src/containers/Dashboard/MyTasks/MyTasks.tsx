import React from 'react';
import SingleTask from '../../../components/SingleTask/SingleTask';

const MyTasks: React.FC = props => {
    return (
        <div className="scorllable-div">
            <div className="container">
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            </div>
        </div>
    );
}

export default MyTasks;