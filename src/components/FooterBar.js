import React from "react";
import "./FooterBar.css";

export default function FooterBar() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Company</h3>
        <a href="/about">About Us</a>
        <a href="/team">Our Team</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footer-section">
        <h3>Services</h3>
        <a href="/">JPG to PNG</a>
        <a href="/jpg-to-pdf">JPG to PDF</a>
        <a href="/png-to-jpg">PNG to JPG</a>
        <a href="/compress-image">Compress Image</a>
      </div>

      <div className="footer-section">
        <h3>Legal</h3>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>

      <div>
        <div className="footer-section">
        <p className="footer-copy">© {new Date().getFullYear()} BOXdocs.inc   All Rights Reserved.</p>
      </div>
      </div>

    </footer>
  );
}
