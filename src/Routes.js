import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/home';

class Routes extends Component {
  render() {
    return (
      <div>
          <Router>

            <Route path='/' exact Component='{Home}'/>
          
          </Router>
        </div>
    );
  }
}

export default Routes;
