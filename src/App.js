// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import OrdersCalendar from './components/OrdersCalendar';
import './App.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/products">PRODUCTS</Link></li>
        <li><Link to="/orders">ORDERS</Link></li>
        <li><Link to="/calendar">ORDER CALENDAR</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/products" component={Products} />
          <Route path="/orders" component={Orders} />
          <Route path="/calendar" component={OrdersCalendar} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
