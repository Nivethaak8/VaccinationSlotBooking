// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin';
import UserDashboard from './components/UserDashboard';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import CentreSearch from './components/CentreSearch';
import ApplySlot from './components/ApplySlot';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={UserSignup} />
        <Route path="/login" component={UserLogin} />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/search" component={CentreSearch} />
        <Route path="/apply" component={ApplySlot} />
      </Switch>
    </Router>
  );
}

export default App;
