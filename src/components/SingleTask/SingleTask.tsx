import React from 'react';

const SingleTask: React.FC = props => {
    return(
        <div className="list-group border-rounded my-3">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Task Title &nbsp;
                <span className="badge badge-primary badge-pill mr-auto">Due: 14/5/2020</span>
                <button className="btn btn-sm btn-success badge-pill">Show</button>
                &nbsp;
                <button className="btn btn-sm btn-danger badge-pill">Delete</button>
            </li>
        </div>
    );
}

export default SingleTask;