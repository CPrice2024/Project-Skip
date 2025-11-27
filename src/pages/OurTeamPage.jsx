import React from "react";
import TopBar from "../components/TopBanner";
import BottomBanner from "../components/BottomBanner";
import FooterBar from "../components/FooterBar";
import GoogleAd from "../components/GoogleAd";

export default function OurTeamPage() {
  return (
    <div className="app-container">
      <TopBar />

      <div className="center-box">
        <h1>Our Team</h1>
        <p>Meet the passionate team behind our online file conversion platform. We are dedicated to providing fast, secure, and easy-to-use tools for everyone.</p>
        <ul>
          <li>Rediet Negash – Founder & Developer</li>
          <li>Jane Smith – Product Manager</li>
          <li>Emily Johnson – UX/UI Designer</li>
          <li>Support Team – Customer Success</li>
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
