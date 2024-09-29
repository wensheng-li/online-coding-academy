// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EnrollmentsReportPage from "./pages/EnrolmentsRepotPage";
import EnrollmentsReportPage2 from "./pages/EnrolmentsReportPage2";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage />} />
            {/* Enrollments Report Page */}
            <Route path="/report" element={<EnrollmentsReportPage />} />
            {/* Enrollments Report Page */}
            <Route path="/report2" element={<EnrollmentsReportPage2 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
