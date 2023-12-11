import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './component/Navbar'
import Student from './pages/student/student';
import Course from './pages/course/course';
import Attendence from './pages/attendence/attendence';

import Dashboard from './pages/dashboard/dashboard';

import './style/app.css'
const App = () => {


  return (
    <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/student"  element={<Student/>} />
          <Route path="/course"  element={<Course/>} />
          <Route path="/attendence"  element={<Attendence/>} />
          <Route path="/dashboard"  element={<Dashboard/>} />
        </Routes>
    </Router>
  );
};


export default App;
