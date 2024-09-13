// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CarDetailsPage from "./components/CarDetailsPage"; // Import the new CarDetailsPage

const App = () => {
  return (
    <Router basename="/vehicle-rental">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/car/:carId" element={<CarDetailsPage />} /> {/* New route for car details */}
      </Routes>
    </Router>
  );
};

export default App;