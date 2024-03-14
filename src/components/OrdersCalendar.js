

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

const OrdersCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // Mock data for orders on each date
  const ordersByDate = {
    '2024-02-29': [
      { id: 1, customerName: 'Priya ', status: 'DELIVERED' },
    { id: 2, customerName: 'ANANYA', status: 'PENDING' },
    ],
    '2024-03-01': [
      { id: 3, customerName: 'RAJESH', status: 'SHIPPED' },
      { id: 4, customerName: 'DHRUVV', status: 'DELIVERED' },
    ],
    '2024-03-02': [
      { id: 5, customerName: 'SURESH', status: 'Pending' },
      { id: 6, customerName: 'MAHESH', status: 'Completed' },
    ],
    '2024-03-03': [
      { id: 7, customerName: 'ROHIT', status: 'Pending' },
    { id: 8, customerName: 'ANKIT', status: 'Completed' },
    ],
    '2024-03-04': [
      { id: 9, customerName: 'ROHAN', status: 'Pending' },
      { id: 10, customerName: 'SACHIN', status: 'Completed' },
    ],
    
    '2024-03-07': [
      { id: 11, customerName: 'SUNIL', status: 'Pending' },
      { id: 12, customerName: 'PAYEL', status: 'Completed' },
      { id: 13, customerName: 'RAJESH', status: 'Pending' },
    ],
    '2024-03-08': [
      { id: 14, customerName: 'SUAHANA', status: 'Completed' },
    { id: 15, customerName: 'SOHAM', status: 'Pending' },
    { id: 16, customerName: 'RATAN', status: 'Completed' },
    { id: 17, customerName: 'MUKHESH', status: 'Pending' },
    ],
    '2024-03-09': [
      { id: 18, customerName: 'VIJAY', status: 'Completed' },
    { id: 19, customerName: 'SURESH', status: 'Pending' },
    { id: 20, customerName: 'YUSUF', status: 'Completed' },
    { id: 21, customerName: 'IRFAN', status: 'Pending' },
    ],
    '2024-03-10': [
      { id: 22, customerName: 'Zane', status: 'Completed' },
    ],
   
    // Add more dates and orders
  };

  const handleDateChange = (date) => {
    // Set the time part to midnight
    date.setHours(0, 0, 0, 0);
    setSelectedDate(date);
    // Implement logic to fetch orders on the selected date
  };

  const getOrdersForSelectedDate = () => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    return ordersByDate[formattedDate] || [];
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '112vh', background: 'linear-gradient(to bottom, #FF6E7F, #FFD166, #6EC7FF, #BFE9FF)', color: 'blue' }}>
      <h1>ORDER CALENDAR</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={({ date }) => {
          // Set the time part to midnight
          date.setHours(0, 0, 0, 0);
          const formattedDate = date.toISOString().split('T')[0];
          const orders = ordersByDate[formattedDate] || [];
          return orders.length > 0 ? <p>{orders.length} Orders</p> : null;
        }}
        calendarType="US"
        className="fullscreen-calendar"
      />
      <div>
        <h2>Orders on {selectedDate.toLocaleDateString()}</h2>
        <ul>
          {getOrdersForSelectedDate().map((order) => (
            <li key={order.id}>
              Customer: {order.customerName} - ID: {order.id} - Status: {order.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrdersCalendar;

         




