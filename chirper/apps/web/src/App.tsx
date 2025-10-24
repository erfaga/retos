import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Composer from './components/Composer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Composer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;