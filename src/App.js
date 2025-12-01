import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JpgToPngPage from "./pages/JpgToPng";
import PngToJpgPage from "./pages/PngToJpg";
import CompressImagePage from "./pages/CompressImage";
import JpgToPdfPage from "./pages/JpgToPdf";
import React from "react";
import "./App.css";
import PdfToWordPage from "./pages/PdfToWord";
import AboutPage from "./pages/AboutPage";
import OurTeamPage from "./pages/OurTeamPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";





export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JpgToPngPage />} />
        <Route path="/jpg-to-png" element={<JpgToPngPage />} />
        <Route path="/png-to-jpg" element={<PngToJpgPage />} />
        <Route path="/compress-image" element={<CompressImagePage />} />
        <Route path="/jpg-to-pdf" element={<JpgToPdfPage />} />
        <Route path="/pdf-to-word" element={<PdfToWordPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
      </Routes>
    </Router>
  );
}
