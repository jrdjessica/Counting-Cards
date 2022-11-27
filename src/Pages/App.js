import React from 'react';

import '../App.css';
import Nav from './Nav';
import Tutorial from './Tutorial';
// import Game from './Game';
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
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/exercise" element={<Exercises />} />
          {/* <Route path="/game" element={<Game />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
