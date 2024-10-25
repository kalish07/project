import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import CarDetails from './components/CarDetails';
import Host from './components/Host';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/host" element = {<Host/>} />
      </Routes>
    </Router>
  );
};

export default App;