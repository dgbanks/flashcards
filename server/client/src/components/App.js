import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './header';
import { Dashboard } from './dashboard';

const Landing = () => <h2>Tryna make some flashcards?</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
