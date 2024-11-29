import React from "react";
import NavBar from "../components/NavBar";
import GenereBar from "../components/Home/GenereBar";
import MediaSection from "../components/Home/MediaSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="text-white">
        <GenereBar></GenereBar>
        <MediaSection title="Spider Man" />
        <MediaSection title="Harry Potter" />
        <MediaSection title="Star Wars" />
      </main>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
