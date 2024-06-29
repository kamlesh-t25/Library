import React from 'react';
import OrderTable from './OrderTable';
import IssueRequests from './IssueRequests';
import './styles.css';
const Dashboard = () => {
    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>Dashboard</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <a className="active" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>

            <ul className="box-info">
                <li>
                    <i className='bx bxs-calendar-check'></i>
                    <span className="text">
                        <h3>XXX</h3>
                        <p>New Order</p>
                    </span>
                </li>
                <li>
                    <i className='bx bxs-group'></i>
                    <span className="text">
                        <h3>XXX</h3>
                        <p>Visitors</p>
                    </span>
                </li>
            </ul>
            <div className="table-data">
                <OrderTable />
                <IssueRequests />
            </div>
        </main>
    );
};

export default Dashboard;
