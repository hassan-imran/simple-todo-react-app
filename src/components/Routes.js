import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import DisplayList from './displaylist';
import User from './user';

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
