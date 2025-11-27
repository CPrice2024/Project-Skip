import React, { useState } from "react";
import "./TopBar.css";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";

function TopBanner() {
  const [selectedLang, setSelectedLang] = useState("en");

  return (
    <div className="topbar-container">

      {/* LEFT - LOGO */}
      <div className="topbar-left">
        <img
          src={logo}
          alt="Logo"
          className="topbar-logo"
          onClick={() => (window.location.href = "/")}
        />
      </div>

      {/* MIDDLE - TOOLS NAVIGATION */}
      <div className="topbar-middle">
        <Link to="/" className="topbar-link">JPG → PNG</Link>
        <Link to="/png-to-jpg" className="topbar-link">PNG → JPG</Link>
        <Link to="/compress-image" className="topbar-link">Compress Image</Link>
        <Link to="/jpg-to-pdf" className="topbar-link">JPG → PDF</Link>
        <Link to="/pdf-to-word" className="topbar-link">PDF → Word</Link>
      </div>

      {/* RIGHT - LANGUAGE SELECTOR */}
      <div className="topbar-right">
        <select
          className="language-select"
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    </div>
  );
}

export default TopBanner;

