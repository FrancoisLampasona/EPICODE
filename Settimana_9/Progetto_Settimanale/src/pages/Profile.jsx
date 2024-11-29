import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EditProfile from "../components/Profile/EditProfile";

const ProfilePage = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <EditProfile></EditProfile>
      <Footer></Footer>
    </>
  );
};

export default ProfilePage;
