import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UserDashboard: React.FC = () => {
  const userName = "Mario"; // In futuro da auth/user context

  return (
    <SidebarProvider>
      <Dashboard />
    </SidebarProvider>
  );
};

export default UserDashboard;
