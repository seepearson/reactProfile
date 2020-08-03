import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from '../src/components/Header'
import Home from './components/Home'
import HideScroll from '../src/components/HideScroll'
import Jumbotron from '../src/components/Jumbotron'
import Portfolio from './components/portfolio'
import Contact from './components/Contact'
import Container from '@material-ui/core/Container';
import Resume from './components/resume';



function App() {
  return (
    <><Container maxWidth="lg">
      <Router>
        <HideScroll />
        <Jumbotron />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </Container>
    </>
  );
}

export default App;
