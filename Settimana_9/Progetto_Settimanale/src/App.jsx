import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import AccountPage from "./pages/Account";
import Navigation from "./pages/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/style.css";

const App = () => {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/accountpage" element={<AccountPage />} />
      </Routes>
    </Router>
  );
};

export default App;
