
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from "./Images/LetsGameLogo.png";
import Home from './home'
import About from './about';
import HowItWorks from './howItWorks.js';
import Started from './getstarted.js';
import Profile from './profile'

import { Container, Row, Col, Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-div">
          <div style={{display: 'flex',marginTop:'5px',marginLeft:'5px'}}>
          <a id="logo-nav" className="logo-nav" style={{padding: '0px'}} href='/'><Image src={logo} className="logo-img" style={{width: '100px', height: '50px'}} /></a>
          <ul className="navbar">
          
              
           
            <li className="move">
              <Link to="/">Home</Link>
            </li>
            <li className="move">
              <Link to="/about">About Us</Link>
            </li>
            <li className="move">
              <Link to="/how-it-works">How It Works</Link>
            </li>
            <li className="move">
              <a href="mailto:emergingsoftware173@gmail.com">Contact Us</a> 
            </li>
            {/* <li>
              <Link to="/start">Started</Link>
            </li> */}
          </ul>
          </div>
     

          {/* <hr /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/how-it-works">
              <HowItWorks />
            </Route>
            <Route path="/start">
              <Started />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
