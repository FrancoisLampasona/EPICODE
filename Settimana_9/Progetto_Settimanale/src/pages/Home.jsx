import React from "react";
import NavBar from "../components/NavBar";
import GenereBar from "../components/GenereBar";
import MediaSection from "../components/MediaSection";
import VideoModal from "../components/VideoModal";
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
        <VideoModal></VideoModal>
      </main>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
