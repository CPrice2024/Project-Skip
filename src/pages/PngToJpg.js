import React, { useState } from "react";
import { saveAs } from "file-saver";
import TopBanner from "../components/TopBanner";
import BottomBanner from "../components/BottomBanner";
import FooterBar from "../components/FooterBar";
import GoogleAd from "../components/GoogleAd";
import { Link } from "react-router-dom";

export default function PngToJpgPage() {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleFiles = (fileList) => {
    const arr = Array.from(fileList).filter((f) => f.type === "image/png");
    const previews = arr.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prev) => [...prev, ...previews]);
  };

  const handleConvert = () => {
    files.forEach(({ file, preview }) => {
      const img = new Image();
      img.src = preview;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFFFF"; // PNG → JPG must have a background
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            saveAs(blob, file.name.replace(".png", ".jpg"));
          },
          "image/jpeg",
          1
        );
      };
    });
  };

  return (
    <div className="app-container">

      <TopBanner />

      <div className="long">
        <h2 className="long-h1">PNG to JPG Converter</h2>
        <p className="long-p">
          Transform PNG images to JPG format and convert multiple PNG to JPG online at once.
        </p>

      </div>

      <div className="horizontal-ad">
        <GoogleAd slot="4444444444" />
      </div>

      <div className="main-layout">
        <div className="side-banner">
          <GoogleAd slot="1111111111" />
        </div>
        

        <div className="center-box">
          <h1>PNG to JPG Converter</h1>
          <p>Upload PNG files or drag & drop multiple files.</p>
          {/* Switch navigation */}
          <div className="button-container">
            <Link to="/" className="switch-tool-btn">JPG → PNG</Link>
            <Link to="/compress-image" className="switch-tool-btn">Compress Image</Link>
            <Link to="/pdf-to-word" className="switch-tool-btn">PDF → Word</Link>
            <Link to="/jpg-to-pdf" className="switch-tool-btn">JPG → PDF</Link>
          </div>

          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInputPng").click()}
          >
            <p className="blink-text">Drag & drop files here</p>
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
            <p style={{ fontSize: "12px", color: "#555" }}>
              or click to choose files
            </p>
          </div>

          <input
            id="fileInputPng"
            type="file"
            accept="image/png"
            multiple
            style={{ display: "none" }}
            onChange={(e) => handleFiles(e.target.files)}
          />

          <div className="preview-list">
            {files.map((f, index) => (
              <div key={index} className="preview-item">
                <button
                  className="remove-btn"
                  title="Remove file"
                  onClick={() =>
                    setFiles((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  ×
                </button>

                <img src={f.preview} className="preview-img" alt={f.file.name} />
                <p className="preview-filename">{f.file.name}</p>

                <button
                  className="convert-btn"
                  onClick={() => {
                    const img = new Image();
                    img.src = f.preview;

                    img.onload = () => {
                      const canvas = document.createElement("canvas");
                      canvas.width = img.width;
                      canvas.height = img.height;

                      const ctx = canvas.getContext("2d");
                      ctx.fillStyle = "#FFFFFF";
                      ctx.fillRect(0, 0, canvas.width, canvas.height);
                      ctx.drawImage(img, 0, 0);

                      canvas.toBlob(
                        (blob) => {
                          saveAs(blob, f.file.name.replace(".png", ".jpg"));
                        },
                        "image/jpeg",
                        1
                      );
                    };
                  }}
                >
                  Download
                </button>
              </div>
            ))}
          </div>

          {files.length > 0 && (
            <button className="convert-btn" onClick={handleConvert}>
              Download all
            </button>
          )}

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <GoogleAd slot="3333333333" />
          </div>
        </div>

        <div className="side-banner">
          <GoogleAd slot="2222222222" />
        </div>
      </div>
      <div className="horizontal-ad">
          <GoogleAd slot="4444444444" />
          
        </div>
            <div className="long">
                <h2 className="long-h1">Why should I convert PNG to JPG?</h2>
                <p className="long-p">PNG files are high-quality and often large because they support transparency. JPG files are smaller and optimized for web use. Converting PNG to JPG helps reduce file size while keeping good visual quality—perfect for uploading or sharing faster.</p>
                <h2 className="long-h1">Will converting PNG to JPG remove transparency?</h2>
                <p className="long-p">Yes. JPG does not support transparency. Any transparent areas in your PNG will be filled with white (or your chosen background color if supported). The rest of the image stays the same.</p>
                <h2 className="long-h1">Is there any quality loss when converting PNG to JPG?</h2>
                <p className="long-p">A little. JPG uses lossy compression, which slightly reduces image quality to make the file smaller. However, our tool optimizes the compression level so you get a good balance between quality and size.</p>  
              </div>

      <BottomBanner link="https://example.com" />
      <FooterBar />
    </div>
  );
}
