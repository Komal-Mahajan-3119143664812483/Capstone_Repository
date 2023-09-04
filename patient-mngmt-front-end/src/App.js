import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components./Login';
import Registration from './Components./Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        </Routes>
    </Router>
  );
}

export default App;
