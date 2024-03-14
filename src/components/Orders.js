


import React from 'react';
// import './Orders.css';
const Orders = () => {
  
  
  // Sample order data
  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = 'lightblue';
    event.target.style.transition = 'background-color 0.3s ease';
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = ''; // Reset to default
  };

  const orders = [
    {
      id: 1,
      customerName: 'Priya Patel',
      location: 'JAIPUR',
      name:'ROSE-5',
      amount: 250,
      status: 'DELIVERED',
    },
    // Add more orders
    {
      id: 2,
      customerName: 'Rajesh Kumar',
      location: 'KOLKATA',
      name:'DAHLIA-4',
      amount: 240,
      status: 'PENDING',
    },
    
    {
      id: 3,
      customerName: 'Aarav Sharma',
      location: 'MUMBAI',
      name:'TULIP-10',
      amount: 300,
      status: 'DELIVERED',
    },
    {
      id: 4,
      customerName: 'Deepika Singh',
      location: 'GUJRAT',
      name:'SUNFLOWER-5',
      amount: 280,
      status: 'PENDING',
    },
    {
      id: 5,
      customerName: 'Siddharth Gupta',
      location: 'ODISHA',
      name:'ROSE-10',
      amount: 500,
      status: 'SHIPPED',
    },
    {
      id: 6,
      customerName: 'Ananya Joshi',
      location: 'DELHI',
      name:'BIRDS OF PARADISE-2',
      amount: 1000,
      status: 'DELIVERED',
    },
    {
      id: 7,
      customerName: 'Rohan Khanna',
      location: 'CHENNAI',
      name:'PEONY',
      amount: 100,
      status: 'PROCESSING',
    },
    {
      id: 8,
      customerName: 'Nandini Desai',
      location: 'PUNE',
      name:'ORCHIDS-4',
      amount: 200,
      status: 'DELIVERED',
    },
    {
      id: 9,
      customerName: 'Vikram Singh Rathore',
      location: 'VARANASI',
      name:'GERBERA DAISY',
      amount: 100,
      status: 'PENDING',
    },
    {
      id: 10,
      customerName: 'Meera Chatterjee',
      location: 'LUCKNOW',
      name:'DAHLIA',
      amount: 60,
      status: 'PROCESSING',
    },
    {
      id: 11,
      customerName: 'Arjun Malhotra',
      location: 'HARYANA',
      name:'ROSE-6',
      amount: 300,
      status: 'SHIPPED',
    },
    {
      id: 12,
      customerName: 'Pooja Verma',
      location: 'HYDERABAD',
      name:'SUNFLOWER-3',
      amount: 210,
      status: 'PENDING',
    },
    {
      id: 13,
      customerName: 'Aditya Mishra',
      location: 'ASSAM',
      name:'HYDRANGEA',
      amount:200,
      status: 'SHIPPED',
    },
    {
      id: 14,
      customerName: 'Ritu Kapoor',
      location: 'KERALA',
      name:'BIRD OF PARADISE',
      amount: 500,
      status: 'PROCESSING',
    },
    {
      id: 15,
      customerName: 'Ajay Tiwari',
      location: 'BHOPAL',
      name:'LILY-4',
      amount: 120,
      status: 'PENDING',
    },
    // Add more orders as needed
  ];

  return (
    <div>
      <h1 className='OM'>ORDER MANAGEMENT</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Name</th>
            <th>Location</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.name}</td>
              <td>{order.location}</td>
              <td>Rs.{order.amount.toFixed(2)}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;