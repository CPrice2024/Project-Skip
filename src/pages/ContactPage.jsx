import React from "react";
import TopBar from "../components/TopBanner";
import BottomBanner from "../components/BottomBanner";
import FooterBar from "../components/FooterBar";
import GoogleAd from "../components/GoogleAd";

export default function ContactPage() {
  return (
    <div className="app-container">
      <TopBar />
      <div className="center-box">
        <h1>Contact Us</h1>
        <p>If you have questions, feedback, or want to suggest a new tool, feel free to reach out:</p>
        <ul>
          <li>Email: <strong><i>support@boxdocs.com</i></strong></li>
          <li>Phone: <strong>+153 486 0890</strong></li>
          <li>Address: Paul St., Web City</li>
        </ul>
      </div>
      <div className="horizontal-ad">
        <GoogleAd slot="3333333333" />
      </div>
      <BottomBanner link="#" />
      <FooterBar />
    </div>
  );
}
