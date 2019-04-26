import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import User from './components/user';
import App from './App'



class Routes extends Component {
  render() {
    return (
        <Router>

          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/app/">Todo List</Link>
                </li>
                <li>
                  <Link to="/user/">User</Link>
                </li>
              </ul>
            </nav>

            <Route path='/' exact component={Home} />
            <Route path='/about/' exact component={About} />
            <Route path='/app/' exact component={App} />
            <Route path='/user/' component={User} />

          </div>

        </Router>
    );
  }
}

export default Routes;
