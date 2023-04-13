import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Healthcare from "./pages/Healthcare";
import HealthcareDetails from './pages/HealthcareDetails';
import EditProfile from './pages/EditProfile';
import Activities from './pages/Activities';
import ActivityDetails from './pages/ActivityDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from './AuthContext';
import {ActivityLocationProvider} from './ActivityLocationContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ActivityLocationProvider>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Activities' element={<Activities />} />
        <Route path='/ActivityDetails' element={<ActivityDetails />} />
        <Route path='/EditProfile' element={<EditProfile />} />
        <Route path='/Healthcare' element={<Healthcare />} />
        <Route path='/HealthcareDetails' element={<HealthcareDetails />} />
      </Routes>
      </ActivityLocationProvider>
    </AuthProvider>
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
