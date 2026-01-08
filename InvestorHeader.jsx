import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar, Menu, MenuItem, IconButton, Tooltip } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import gsap from "gsap";
import { GlobalContext } from "../GlobalContext/GlobalState";

const InvestorHeader = ({ user, setUser }) => {
  const { theme, setTheme } = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();

  // GSAP entrance animation
  useEffect(() => {
    gsap.fromTo(
      ".header-container",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  // Theme toggle animation
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    gsap.fromTo(
      ".theme-icon",
      { rotate: 0, scale: 0.5 },
      { rotate: 360, scale: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" }
    );
  };

  // Handle Profile Menu
  const handleProfileClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // Logout → remove saved user
  const handleLogout = () => {
    localStorage.removeItem("app-user");
    setUser(null);
    navigate("/login");
  };

  // Protect navigation: force login for protected pages
  const handleNavClick = (path) => {
    // Allow access only to Home without login
    if (!user && path !== "/Investorhome" && path !== "/Investorhome/") {
      localStorage.setItem("redirectPath", path); // save intended path
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <header
      className="header-container fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center shadow-lg backdrop-blur-md"
      style={{
        background:
          theme === "dark"
            ? "rgba(15,23,42,0.9)" // dark glass
            : "rgba(37,99,235,0.9)", // blue glass
        color: "white",
      }}
    >
      {/* Logo */}
      <h1
        className="text-2xl font-extrabold tracking-wide cursor-pointer"
        onClick={() => handleNavClick("/Investorhome")}
      >
        Investor<span className="text-red-400">Hub</span>
      </h1>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6 items-center font-medium">
          {["Home", "Innovations", "Message", "Games"].map((item) => (
            <li key={item}>
              <button
                onClick={() =>
                  handleNavClick(
                    `/Investorhome${
                      item === "Home" ? "" : `/${item.toLowerCase()}`
                    }`
                  )
                }
                className="hover:text-yellow-300 transition"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side Controls */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <Tooltip title="Toggle Theme">
          <IconButton onClick={toggleTheme} className="theme-icon">
            {theme === "dark" ? (
              <LightMode htmlColor="yellow" />
            ) : (
              <DarkMode htmlColor="white" />
            )}
          </IconButton>
        </Tooltip>

        {/* Profile / Login */}
        {user ? (
          <>
            <Tooltip title="Profile">
              <IconButton onClick={handleProfileClick}>
                <Avatar alt={user.username} src={user.avatar || ""} />
              </IconButton>
            </Tooltip>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem disabled>
                <div>
                  <p className="font-bold">{user.username}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          !isLoginPage && (
            <button
              onClick={() => navigate("/login")}
              className="bg-red-600 px-4 py-1 rounded-lg hover:bg-red-700 transition"
            >
              Login
            </button>
          )
        )}
      </div>
    </header>
  );
};

export default InvestorHeader;
