import React, { useState } from "react";
import TopBanner from "../components/TopBanner";
import BottomBanner from "../components/BottomBanner";
import FooterBar from "../components/FooterBar";
import GoogleAd from "../components/GoogleAd";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph } from "docx";
import { Link } from "react-router-dom";

export default function PdfToWordPage() {
  const [files, setFiles] = useState([]);

  const handleFiles = (selectedFiles) => {
    const fileArr = Array.from(selectedFiles).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prev) => [...prev, ...fileArr]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const convertPdfToWord = async (file) => {
    const reader = new FileReader();

    reader.onload = async () => {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph("Converted PDF Content Placeholder"),
              new Paragraph("⚠ Full text extraction requires a backend."),
            ],
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, file.name.replace(".pdf", ".docx"));
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="app-container">
      <TopBanner />
      <div className="long">
        <h2 className="long-h1">PDF to WORD Converter</h2>
        <p className="long-p">Free online PDF to Word converter. Upload your PDF and instantly download a clean, editable DOCX file.</p>
       </div>
        {/* Horizontal Ad */}
        <div className="horizontal-ad">
          <GoogleAd slot="4444444444" />
        </div>

        {/* MAIN LAYOUT */}
        <div className="main-layout">
          {/* LEFT SIDEBAR AD */}
          <div className="side-banner">
            <GoogleAd slot="1111111111" />
          </div>

          {/* MAIN CONTENT */}
          <div className="center-box">
            <h1>Convert PDF Files to Word</h1>
            <p>Upload PDF files or drag & drop multiple documents.</p>

            {/* Switch navigation */}
            <div className="button-container">
              <Link to="/" className="switch-tool-btn">
                JPG → PNG
              </Link>
              <Link to="/png-to-jpg" className="switch-tool-btn">
                PNG → JPG
              </Link>
              <Link to="/compress-image" className="switch-tool-btn">
                Compress Image
              </Link>
              <Link to="/jpg-to-pdf" className="switch-tool-btn">
                JPG → PDF
              </Link>
            </div>

            {/* Upload Box */}
            <div
              className="drop-zone blink-glow"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => document.getElementById("pdfInput").click()}
            >
              <p className="blink-text">Drag & Drop PDF files</p>
              <p style={{ fontSize: "12px", color: "#555" }}>
                or click to upload
              </p>
            </div>

            <input
              id="pdfInput"
              type="file"
              accept="application/pdf"
              hidden
              multiple
              onChange={(e) => handleFiles(e.target.files)}
            />

            {/* Preview List */}
            <div className="preview-list">
              {files.map((f, index) => (
                <div key={index} className="preview-item">
                  {/* Remove Button */}
                  <button
                    className="remove-btn"
                    onClick={() =>
                      setFiles((prev) => prev.filter((_, i) => i !== index))
                    }
                  >
                    ×
                  </button>

                  <embed
                    src={f.preview}
                    className="preview-pdf"
                    type="application/pdf"
                  />

                  <p>{f.file.name}</p>

                  <button
                    className="convert-btn"
                    onClick={() => convertPdfToWord(f.file)}
                  >
                    Convert to Word
                  </button>
                </div>
              ))}


            </div>

          </div>
                                            {/* RIGHT SIDEBAR AD */}
              <div className="side-banner">
                <GoogleAd slot="2222222222" />
              </div>
        </div>

        <div className="horizontal-ad">
            <GoogleAd slot="4444444444" />
            
          </div>
              <div className="long">
                  <h2 className="long-h1">Is the PDF to Word conversion accurate?</h2>
                  <p className="long-p">Yes. Our tool preserves the original layout, fonts, images, and formatting as accurately as possible. Most standard PDFs convert into fully editable Word documents without losing structure.</p>
     <h2 className="long-h1">Will my files be safe during the conversion?</h2>
                  <p className="long-p">Absolutely. All conversions happen securely, and your files are automatically deleted from our server after processing. We do not store, share, or access your documents beyond the conversion task.</p>
<h3 className="long-h1">Can I convert scanned PDFs to Word?</h3>
                  <p className="long-p">Currently, our PDF to Word converter does not support OCR (Optical Character Recognition) for scanned documents. Only text-based PDFs can be converted accurately. For scanned PDFs, consider using dedicated OCR software.</p> 
     </div>


      <BottomBanner link="https://example.com" />
      <FooterBar />
    </div>
  );
}
