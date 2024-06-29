import React, { useContext, useEffect, useState } from 'react';
import './order.css';
import { StoreContext } from './Context/StoreContext';

const OrderTable = () => {
    const { orders, getUserName, booksList ,statusChange } = useContext(StoreContext);
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
        statusChange(userId,bookId,newStatus);
    };

    const isAllApproved = (order) => {
        return order.items.every((item) => status[`${order.userId}-${item.bookId}`] === 'Approve' || item.status === 'Approve');
    };

    const isAllRequests=(order)=>{
        return order.items.every((item)=> status[`${order.userId}-${item.bookId}`]==='Pending' || item.status=='Pending');
    }

    const hasPendingRequests = (order) => {
        return order.items.some((item) => status[`${order.userId}-${item.bookId}`] === 'Pending' || item.status === 'Pending');
    };

    const hasApprovedRequests = (order) => {
        return order.items.some((item) => status[`${order.userId}-${item.bookId}`] === 'Approve' || item.status === 'Approve');
    };


    return (
        <div className="table-data">
            <div className="orders-data">
                <h2><b> <u>Requests :-</u> </b></h2>
                {orders.map((order) => (
                    hasPendingRequests(order) && (
                        <div key={order._id} className="user-order">
                            <p className="order-item-userName">{userNames[order.userId] || 'Loading...'}</p>
                            <ul className="book-item-list">
                                {order.items.map((item, itemIndex) => {
                                    const book = booksList.find((book) => book._id === item.bookId);
                                    const itemStatus = status[`${order.userId}-${item.bookId}`] || item.status;
                                    return itemStatus === 'Pending' ? (
                                        <div key={itemIndex} className="book-item">
                                            <p>{item.bookId}</p>
                                            <p>{book?.title || 'Loading...'}</p>
                                            {/* <p>{book?.author || 'Loading...'}</p> */}
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
                                    ) : null;
                                })}
                            </ul>
                        </div>
                    )
                ))}
            </div>
            <div className="todo">
            <h2><b> <u>Approved Requests :-</u> </b></h2>
                {orders.map((order) => (
                    hasApprovedRequests(order) && (<div key={order._id} className="user-order">
                        <p className="order-item-userName">{userNames[order.userId] || 'Loading...'}</p>
                        <ul className="book-item-list">
                            {order.items.map((item, itemIndex) => {
                                const book = booksList.find((book) => book._id === item.bookId);
                                const itemStatus = status[`${order.userId}-${item.bookId}`] || item.status;
                                return itemStatus == "Approve" ? (
                                    <div key={itemIndex} className="book-item">
                                        <p>{item.bookId}</p>
                                        <p>{book?.title || 'Loading...'}</p>
                                        {/* <p>{book?.author || 'Loading...'}</p> */}
                                        <p>Count: {book?.count || 'Loading'}</p> 
                                        <select
                                            className="select-status-options order-item-status"
                                            value={itemStatus}
                                            onChange={(e) => handleChange(order.userId, item.bookId, e.target.value)}
                                            style={{ color: itemStatus === 'Approve' ? 'green' : 'red' }}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Approve" >Approve</option>
                                        </select>
                                    </div>
                                ):null;
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
