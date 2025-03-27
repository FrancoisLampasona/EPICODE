import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/index";
import Footer from "@/components/footer";
import { SelectedPage } from "@/components/common/types";
import { LoginForm } from "@/components/login-form";

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col text-gray-900 text-lg">
      {/* Navbar */}
      <Navbar
        isTopOfPage={false}
        selectedPage={SelectedPage.Home}
        setSelectedPage={() => {}}
        minimal 
      />

      <div className="h-[96px]" />

      <main className="flex-grow flex items-center justify-center p-6 md:p-10">
        <motion.div
          className="w-full max-w-sm md:max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <LoginForm />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
