import React from "react";
import TopBar from "../components/TopBanner";
import BottomBanner from "../components/BottomBanner";
import FooterBar from "../components/FooterBar";
import GoogleAd from "../components/GoogleAd";

export default function PrivacyPolicyPage() {
  return (
    <div className="app-container">
      <TopBar />

      <div className="center-box">
        <h1>Privacy Policy</h1>
        <p>We take your privacy seriously. Our platform does not store your files permanently, and all uploaded files are deleted automatically after processing.</p>
        <p>We do not share or sell your information, and all data transfers are encrypted for security.</p>
      </div>

      <div className="horizontal-ad">
        <GoogleAd slot="3333333333" />
      </div>

      <BottomBanner link="#" />
      <FooterBar />
    </div>
  );
}
