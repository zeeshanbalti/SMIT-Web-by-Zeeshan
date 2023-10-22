 import './App.css';
import React from 'react';
import Navbar from './Navbar/index'
import SecondSec from './SecondSec/index'
import Third from './ThirdSec/index'
import Four from './FourSection/index'
import Card from './FifthSec/index';
import CardHeading from './fifthSec1/index'
 import CustomFooter from './Footer/index'
 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>

        <Navbar /> 
        <SecondSec /> 
        <Third />
        <Four />
        <CardHeading />
         <Card />
          <CustomFooter />
    </Router>

    );
}

export default App;
