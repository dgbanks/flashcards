import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';

const Landing = () => <h2>Landing</h2>
const Dashboard = () => <h2>Dashboard</h2>

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;