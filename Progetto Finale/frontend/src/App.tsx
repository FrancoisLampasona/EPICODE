import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SelectedPage } from "@/components/common/types";
import IndexPage from "./pages/indexPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/userDashBoard";

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
      if (window.scrollY === 0) setSelectedPage(SelectedPage.Home);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Routes>
        <Route
          path="/"
          element={
            <IndexPage
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
