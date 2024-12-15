import React from 'react';
import './App.css';
import Dashboard from './presentation/dashboard/dashboard.tsx';
import Messenger from './presentation/public/chatWithMe.tsx';
import Team from './presentation/private/team.tsx';
import Home from './presentation/dashboard/home.tsx';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
      <Dashboard />
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/team" element={<Team />} />
        <Route path="/chat-with-me" element={<Messenger />} />
      </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
