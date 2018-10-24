import React, { Component } from 'react';
import Header from './component/header/Header';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard'
import Wizard from './component/wizard/Wizard';
import WizardTwo from './component/wizard/WizardTwo';
import WizardThree from './component/wizard/WizardThree';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className = 'display'>
        <Router>
          <Switch>
            <Route path = '/home' component = {Dashboard}/>
            <Route path = '/wizard' component = {Wizard}/>
            <Route path = '/wizard2' component = {WizardTwo} />
            <Route path = '/wizard3' component = {WizardThree} />
          </Switch>
        </Router>
         
        </div>
        
      </div>
    );
  }
}

export default App;
