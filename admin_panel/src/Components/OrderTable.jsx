import React, { useContext, useEffect, useState } from 'react';
import './order.css';
import { StoreContext } from './Context/StoreContext';

const OrderTable = () => {
    const { orders, getUserName, booksList, statusChange } = useContext(StoreContext);
    const [userNames, setUserNames] = useState({});
    const [status, setStatus] = useState({});

    useEffect(() => {
        const fetchUserNames = async () => {
            let names = {};
            for (const order of orders) {
                if (!userNames[order.userId]) {
                    const name = await getUserName(order.userId);
                    names = { ...names, [order.userId]: name };
                }
            }
            setUserNames((prevNames) => ({ ...prevNames, ...names }));
        };

        fetchUserNames();
    }, [orders, getUserName]);

    const handleChange = (userId, bookId, newStatus) => {
        setStatus((prevStatus) => ({
            ...prevStatus,
            [`${userId}-${bookId}`]: newStatus,
        }));
        console.log(`${userId}:${bookId}:${newStatus}`);
        statusChange(userId, bookId, newStatus);
    };

    const isAllApproved = (order) => {
        return order.items.every((item) => item.status === 'Approve');
    };

    const isAllRequests = (order) => {
        return order.items.every((item) => item.status === 'Pending');
    };

    const hasPendingRequests = (order) => {
        return order.items.some((item) =>item.status === 'Pending');
    };

    const hasApprovedRequests = (order) => {
        return order.items.some((item) =>item.status === 'Approve');
    };

    const calculateDaysRemaining = (updatedAt) => {
        const updatedAtDate = new Date(updatedAt);
        const returnDate = new Date(updatedAtDate);
        returnDate.setDate(updatedAtDate.getDate() + 7); // Set return date to 7 days after updatedAt
    
        const currentDate = new Date();
        const timeDiff = returnDate.getTime() - currentDate.getTime();
        const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
        return daysRemaining;
    };

    const hasDelayedReturn=(order)=>{

        return order.items.some((item) =>item.status === 'Approve' && calculateDaysRemaining(item.updatedAt) <=0);
    }

    return (
        <div className="table-data">
            <div className="options-dataSet">
                <button> <a href="#requests-section" style={{color:"black"}} >Approved Orders</a> </button>
                <button> <a href="#approvedrequest-section" style={{color:"black"}} >Order Requests</a> </button>
                <button> <a href="#delayedreturn-section" style={{color:"black"}} >Delayed Returns</a> </button>
            </div>
            <div className="orders-data" id='requests-section'>
                <h2><b><u>Requests :-</u></b></h2>
                {orders.map((order) => (
                    hasPendingRequests(order) && (
                        <div key={order._id} className="user-order">
                            <p className="order-item-userName">{userNames[order.userId] || 'Loading...'}</p>
                            <ul className="book-item-list">
                                {order.items.filter(item => {
                                    const book = booksList.find((book) => book._id === item.bookId);
                                    return book; // Filter out items where book is not found in booksList
                                }).map((item, itemIndex) => {
                                    const book = booksList.find((book) => book._id === item.bookId);
                                    const itemStatus = status[`${order.userId}-${item.bookId}`] || item.status;
                                    return itemStatus === 'Pending' ? (
                                    <>
                                        <div key={itemIndex} className="book-item">
                                            <p>{item.bookId}</p>
                                            <p>{book?.title || 'Loading...'}</p>
                                            
                                            <p className='book-item-authorName'>{book?.author || 'Loading...'}</p>
                                            <p>Count: {book?.count || 'Loading'}</p>
                                            <select
                                                className="select-status-options order-item-status"
                                                value={itemStatus}
                                                onChange={(e) => handleChange(order.userId, item.bookId, e.target.value)}
                                                style={{ color: itemStatus === 'Approve' ? 'green' : 'red' }}
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="Approve">Approve</option>
                                            </select>
                                        </div>
                                        {/* <hr className='orderItem_hr'/>   */}
                                    </>
                                    ) : null;
                                })}
                            </ul>
                        </div>
                    )
                ))}
            </div>
            <div className="todo" id='approvedrequest-section'>
                <h2><b><u>Approved Requests :-</u></b></h2>
                {orders.map((order) => (
                    hasApprovedRequests(order) && (<div key={order._id} className="user-order">
                        <p className="order-item-userName">{userNames[order.userId] || 'Loading...'}</p>
                        <ul className="book-item-list">
                            {order.items.filter(item => {
                                const book = booksList.find((book) => book._id === item.bookId);
                                return book; // Filter out items where book is not found in booksList
                            }).map((item, itemIndex) => {
                                const book = booksList.find((book) => book._id === item.bookId);
                                const itemStatus = status[`${order.userId}-${item.bookId}`] || item.status;
                                return itemStatus === 'Approve' ? (
                                    <div key={itemIndex} className="book-item-approved">
                                        <p>{item.bookId}</p>
                                        <p>{book?.title || 'Loading...'}</p>
                                        <p className='book-item-authorName'>{book?.author || 'Loading...'}</p>
                                        <p>Count: {book?.count || 'Loading'}</p>
                                    </div>
                                ) : null;
                            })}
                        </ul>
                    </div>
                    )
                ))}
            </div>
            <div className="todo" id='delayedreturn-section'>
                <h2><b><u>Delayed Return :-</u></b></h2>
                {orders.map((order) => (
                    hasDelayedReturn(order) && (<div key={order._id} className="user-order">
                        <p className="order-item-userName">{userNames[order.userId] || 'Loading...'}</p>
                        <ul className="book-item-list">
                            {order.items.filter(item => {
                                const book = booksList.find((book) => book._id === item.bookId);
                                return book; // Filter out items where book is not found in booksList
                            }).map((item, itemIndex) => {
                                let daysRemaining = calculateDaysRemaining(item.updatedAt);
                                daysRemaining=daysRemaining * (-1);
                                const book = booksList.find((book) => book._id === item.bookId);
                                const itemStatus = status[`${order.userId}-${item.bookId}`] || item.status;
                                return itemStatus === 'Approve' && daysRemaining > 0 ? (
                                    <div key={itemIndex} className="book-item-approved">
                                        <p>{item.bookId}</p>
                                        <p>{book?.title || 'Loading...'}</p>
                                        {/* <p className='book-item-authorName'>{book?.author || 'Loading...'}</p> */}
                                        <p><span style={{color:"red"}}>Due from last {daysRemaining} day</span></p>
                                        <p>Count: {book?.count || 'Loading'}</p>
                                    </div>
                                ) : null;
                            })}
                        </ul>
                    </div>
                    )
                ))}
            </div>



        </div>
    );
};

export default OrderTable;
