import React from "react";
import TopBar from "../components/TopBanner";
import BottomBanner from "../components/BottomBanner";
import FooterBar from "../components/FooterBar";
import GoogleAd from "../components/GoogleAd";

export default function TermsOfServicePage() {
  return (
    <div className="app-container">
      <TopBar />

      <div className="center-box">
        <h1>Terms of Service</h1>
        <p>By using our platform, you agree to our terms and conditions. This includes:</p>
        <ul>
          <li>Using the tools for lawful purposes only</li>
          <li>Respecting copyright and intellectual property rights</li>
          <li>Accepting that we are not responsible for misuse of converted files</li>
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
