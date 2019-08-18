import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/:categoryId?" component={Home} />
      </div>
    </Router>
  );
};

export default App;
