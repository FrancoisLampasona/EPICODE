import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MenageAccount from "../components/MenageAccount";

const AccountPage = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="bg-white">
        <MenageAccount></MenageAccount>
      </main>
      <Footer></Footer>
    </>
  );
};

export default AccountPage;
