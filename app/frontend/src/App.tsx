import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Task from './pages/Task';

export interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={ <Login />} />
            <Route path="task" element={ <Task /> } />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
