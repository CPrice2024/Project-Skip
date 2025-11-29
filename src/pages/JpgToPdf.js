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
            <svg
      xmlns="http://www.w3.org/2000/svg"
      className="upload-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1" />
      <polyline points="8 12 12 8 16 12" />
      <line x1="12" y1="8" x2="12" y2="16" />
    </svg>
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
      <div className="long">
  <h2 className="long-h1">JPG to PDF Conversion</h2>
  <p className="long-p">
    JPG files are image formats commonly used for photos, screenshots, and online graphics. 
    PDFs, on the other hand, are document formats designed for easy viewing, printing, and sharing across any device.
  </p>
  <p className="long-p">
    Converting JPG to PDF allows you to turn images into clean, professional documents. 
    Whether you're creating reports, forms, portfolios, receipts, or multi-page documents, PDF provides better organization and higher compatibility than JPG.
  </p>

  <h2 className="long-h1">Why should you convert JPG to PDF?</h2>
  <p className="long-p">
    PDFs maintain the layout, print quality, and structure of your files. 
    This makes them ideal for sharing, archiving, emailing, and printing. 
    Unlike JPGs, PDFs do not lose quality each time they are opened or shared.
  </p>
  <p className="long-p">
    A single PDF can also contain multiple JPG images combined into one file. 
    This makes it much easier to send a collection of images as one document instead of attaching them individually.
  </p>
  <p className="long-p">
    PDFs are also the preferred format for offices, schools, and businesses because they look the same on all devices—phones, tablets, and computers.
  </p>

  <h2 className="long-h1">How to convert JPG to PDF for free?</h2>
  <p className="long-p">
    First, upload your JPG files using the “UPLOAD FILES” button above. 
    You can also drag and drop your photos into the box that says "Drop Your Files Here." 
    Our tool supports uploading multiple JPGs at once.
  </p>
  <p className="long-p">
    After uploading, our converter will automatically turn your images into high-quality PDFs. 
    Each JPG becomes a clean, printable PDF page. 
    If you upload multiple images, you can combine them into a single PDF document.
  </p>
  <p className="long-p">
    When the conversion is finished, you can download each PDF individually or download all PDFs at once as a ZIP file. 
    You can repeat this process anytime with no limitations.
  </p>

  <h2 className="long-h1">Is it safe to convert JPG to PDF online?</h2>
  <p className="long-p">
    Yes — your files are completely safe. Your original JPGs remain on your device and are never modified. 
    All converted PDFs are automatically deleted from our servers after one hour to protect your privacy.
  </p>
  <p className="long-p">
    This ensures a secure, private, and reliable conversion experience every time you use our tool.
  </p>
</div>


      {/* BOTTOM */}
      <BottomBanner link="https://example.com" />
      <FooterBar />
    </div>
  );
}
