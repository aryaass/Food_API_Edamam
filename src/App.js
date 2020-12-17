import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aboutus from './components/pages/Aboutus';
import LowFat from './components/pages/LowFat';
import LowCarb from './components/pages/LowCarb';
import HighProtein from './components/pages/HighProtein';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/lowfat' component={LowFat} />
        <Route path='/lowcarb' component={LowCarb} />
        <Route path='/highprotein' component={HighProtein} />
        <Route path='/Aboutus' component={Aboutus} />
      </Switch>
    </Router>
  );
}

export default App;
