// InvestorLayout.jsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import InvestorHeader from "./InvestorHeader";

const InvestorLayout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user if already logged in
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <>
      <InvestorHeader user={user} setUser={setUser} />
      <main className="pt-20 min-h-100hv bg-color-white">
        <Outlet />
      </main>
    </>
  );
};

export default InvestorLayout;
