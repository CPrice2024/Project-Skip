import React from "react";
import TopBar from "../components/TopBanner";
import BottomBanner from "../components/BottomBanner";
import FooterBar from "../components/FooterBar";
import GoogleAd from "../components/GoogleAd";
import "../App.css";

export default function AboutPage() {
  return (
    <div className="app-container">

      {/* TOP BAR */}
      <TopBar />

      {/* TITLE AREA */}
      <div className="long">
        <h1 className="long-h1">About Us</h1>
        <p className="long-p">
          Welcome to our free online file conversion platform — a fast, reliable, 
          and user-friendly solution for converting everyday files directly from 
          your browser. No registration, no email requirements, and no hidden fees.
        </p>
      </div>

      {/* TOP HORIZONTAL AD */}
      <div className="horizontal-ad">
        <GoogleAd slot="4444444444" />
      </div>

      {/* MAIN LAYOUT */}
      <div className="main-layout">

        {/* LEFT SIDE AD */}
        <div className="side-banner">
          <GoogleAd slot="1111111111" />
        </div>

        {/* CENTER CONTENT */}
        <div className="center-box">

          <h2>What We Do</h2>
          <p className="long-p">
            Our mission is simple: provide fast, safe, and high-quality file conversion 
            tools accessible to everyone. Whether you need to convert JPG to PNG, 
            PNG to JPG, PDF to Word, JPG to PDF, compress images, or more — we’ve 
            created an easy solution that works instantly.
          </p>

          <h2>Why People Love Our Tools</h2>
          <ul className="long-ul">
            <li className="header__list-item">✔ 100% free to use</li>
            <li className="header__list-item">✔ No email or signup required</li>
            <li className="header__list-item">✔ Fast and secure conversion</li>
            <li className="header__list-item">✔ Works directly in your browser</li>
            <li className="header__list-item">✔ Supports multiple file types</li>
          </ul>

          <h2>How We Handle Your Files</h2>
          <p className="long-p">
            All conversions happen inside your browser or are removed automatically 
            after a short time. We don’t store your files permanently. Your privacy 
            and security are extremely important to us.
          </p>

          <h2>Our Goal</h2>
          <p className="long-p">
            Many people struggle with large files, file-type compatibility, or 
            converting images on different devices. We aim to make all of this simple — 
            offering powerful tools that anyone can use with just one click.
          </p>

          <h2>Contact</h2>
          <p className="long-p">
            Have suggestions or want a new tool added?  
            <br />
            Reach us anytime: <strong>support@boxdocs.com</strong>
          </p>

          {/* Middle Ad */}
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <GoogleAd slot="3333333333" />
          </div>

        </div>

        {/* RIGHT SIDE AD */}
        <div className="side-banner">
          <GoogleAd slot="2222222222" />
        </div>
      </div>

      {/* BOTTOM AD */}
      <div className="horizontal-ad">
        <GoogleAd slot="4444444444" />
      </div>

      {/* BOTTOM BANNER + FOOTER */}
      <BottomBanner link="#" />
      <FooterBar />

    </div>
  );
}
