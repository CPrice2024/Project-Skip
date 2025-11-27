import React, { useState } from "react";
import TopBanner from "../components/TopBanner";
import BottomBanner from "../components/BottomBanner";
import FooterBar from "../components/FooterBar";
import GoogleAd from "../components/GoogleAd";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

export default function JpgToPdfPage() {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleFiles = (fileList) => {
    const arr = Array.from(fileList).filter((f) => f.type === "image/jpeg");

    const previews = arr.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFiles((prev) => [...prev, ...previews]);
  };

  const createPDF = async () => {
    const pdf = new jsPDF();

    for (let i = 0; i < files.length; i++) {
      const img = files[i];

      const image = await loadImage(img.preview);

      const width = pdf.internal.pageSize.getWidth();
      const height = (image.height * width) / image.width;

      if (i !== 0) pdf.addPage();

      pdf.addImage(image, "JPEG", 0, 0, width, height);
    }

    pdf.save("converted.pdf");
  };

  const loadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });
  };

  return (
    <div className="app-container">
      {/* TOP */}
      <TopBanner />

      <div className="long">
        <h2 className="long-h1">JPG to PDF Converter</h2>
        <p className="long-p">Free JPG to PDF converter. Combine and convert multiple images into a single PDF in seconds.</p>
      </div>

      <div className="horizontal-ad">
        <GoogleAd slot="4444444444" />
      </div>
      <div className="main-layout">
        {/* LEFT */}
        <div className="side-banner">
          <GoogleAd slot="1111111111" />
        </div>

        {/* CENTER */}
        <div className="center-box">
          <h1>Convert JPG Files to PDF</h1>
          <p>Upload JPG files or drag & drop multiple images.</p>
                  {/* Switch navigation */}
                  <div className="button-container">
                    <Link to="/png-to-jpg" className="switch-tool-btn">PNG → JPG</Link>
                    <Link to="/compress-image" className="switch-tool-btn">Compress</Link>
                    <Link to="/jpg-to-pdf" className="switch-tool-btn active-btn">JPG → PDF</Link>
                    <Link to="/pdf-to-word" className="switch-tool-btn">PDF → Word</Link>
                    
                  </div>

          {/* Upload Area */}
          <div className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => document.getElementById("pdfInput").click()}
          >
            <p className="blink-text">Drag & drop JPG files here</p>
            <p style={{ fontSize: "12px", color: "#555" }}>or click to choose files</p>
          </div>

          {/* Hidden input */}
          <input
            id="pdfInput"
            type="file"
            multiple
            accept="image/jpeg"
            style={{ display: "none" }}
            onChange={(e) => handleFiles(e.target.files)}
          />

          {/* Preview */}
          <div className="preview-list">
            {files.map((f, index) => (
              <div key={index} className="preview-item">
                <button
                  className="remove-btn"
                  onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
                >
                  ×
                </button>
                <img src={f.preview} className="preview-img" alt="preview" />
                <p className="preview-filename">{f.file.name}</p>
              </div>
            ))}
          </div>

          {/* Convert Button */}
          {files.length > 0 && (
            <button className="convert-btn" onClick={createPDF}>
              Convert to PDF
            </button>
          )}

          <div style={{ marginTop: "20px" }}>
            <GoogleAd slot="3333333333" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="side-banner">
          <GoogleAd slot="2222222222" />
        </div>
      </div>

      {/* BOTTOM */}
      <BottomBanner link="https://example.com" />
      <FooterBar />
    </div>
  );
}
