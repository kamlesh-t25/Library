import React from 'react';
import './styles.css';
const IssueRequests = () => {
    return (
        <div className="todo">
            <div className="head">
                <h3>Issue Requests</h3>
                <i className='bx bx-search'></i>
                <i className='bx bx-filter'></i>
            </div>
            <ul className="todo-list">
                <li className="not-completed">
                    <p>Request 1</p>
                    <i className='bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="not-completed">
                    <p>Request 2</p>
                    <i className='bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="not-completed">
                    <p>Request 3</p>
                    <i className='bx bx-dots-vertical-rounded'></i>
                </li>
            </ul>
        </div>
    );
};

export default IssueRequests;
