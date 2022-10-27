import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import './App.css';
import Landing from './pages/Landing';
import Homepage from './pages/Homepage';
import Lessons from './pages/Lessons';

const App: FC = () => {
  return (
    <div className="screen">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
