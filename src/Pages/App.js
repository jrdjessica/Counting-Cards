import React from 'react';

import '../App.css';
import Nav from './Nav';
import Tutorial from './Tutorial';
import Error from './ErrorPage'
import Home from './Home'
import Exercises from './Exercises';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/counting" element={<Home />} />
          <Route path="/counting-tutorial" element={<Tutorial />} />
          <Route path="/counting-exercise" element={<Exercises />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
