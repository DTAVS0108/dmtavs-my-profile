import React from 'react';
import './App.css';
import Dashboard from './presentation/dashboard/dashboard.tsx';
import Messenger from './presentation/public/chatWithMe.tsx';
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
        <Route path="/" element={<div>Dashboard</div>} /> {/* Default route */}
        <Route path="/team" element={<div>Team</div>} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/calendar" element={<div>Calendar</div>} />
        <Route path="/chat-with-me" element={<Messenger />} />
      </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
