import { SelectedPage } from "@/components/common/types";
import React from "react";
import Navbar from "@/components/navbar/index";

import Benefits from "@/components/benefits";
import OurClasses from "@/components/ourClasses";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Home from "./home";
import "../assets/css/indexPage.css";

interface IndexPageProps {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
  isTopOfPage: boolean;
}

const IndexPage: React.FC<IndexPageProps> = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}) => {
  return (
    <div className="text-gray-500 w-full h-full app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default IndexPage;
