import React, { FC, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import './App.css';
import Landing from './pages/Landing';
import Homepage from './pages/Homepage';
import Lessons from './pages/Lessons';
import Menu from './components/Menu';

const App: FC = () => {
  const [shouldDisplayMenu, setShouldDisplayMenu] = useState<boolean>();

  const menuDisplayHandler = (value: boolean) => {
    setShouldDisplayMenu(value);
  };

  return (
    <div className="screen">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </Router>
      {shouldDisplayMenu && <Menu />}
    </div>
  );
};

export default App;
