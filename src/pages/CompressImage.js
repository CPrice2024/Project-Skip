import React, { useState } from "react";
import { saveAs } from "file-saver";
import TopBanner from "../components/TopBanner";
import BottomBanner from "../components/BottomBanner";
import FooterBar from "../components/FooterBar";
import GoogleAd from "../components/GoogleAd";
import { Link } from "react-router-dom";

export default function CompressImagePage() {
  const [files, setFiles] = useState([]);
  const [quality, setQuality] = useState(0.7); // default compression level

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleFiles = (fileList) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];

    const arr = Array.from(fileList).filter((f) => allowed.includes(f.type));

    const previews = arr.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFiles((prev) => [...prev, ...previews]);
  };

  const compressImage = (fileObj) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = fileObj.preview;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");

        // PNG + WEBP need white background for JPG output
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            resolve(blob);
          },
          "image/jpeg",
          quality
        );
      };
    });
  };

  const handleCompressAll = async () => {
    for (const f of files) {
      const blob = await compressImage(f);
      saveAs(blob, f.file.name.replace(/\.(png|jpg|jpeg|webp)$/i, "_compressed.jpg"));
    }
  };

  return (
    <div className="app-container">
      <TopBanner />

      <div className="long">
        <h2 className="long-h1">Compress Images Online</h2>
        <p className="long-p">
          Reduce image file size instantly while keeping high quality. Supports JPG, PNG, and more.
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
          <h1>Compress Your Images</h1>
          <p>Upload JPG/PNG/WEBP images or drag & drop.</p>
                  {/* Switch navigation */}
                  <div className="button-container">
                    <Link to="/" className="switch-tool-btn">JPG → PNG</Link>
                    <Link to="/png-to-jpg" className="switch-tool-btn">PNG → JPG</Link>
                    <Link to="/compress-image" className="switch-tool-btn">Compress Image</Link>
                    <Link to="/pdf-to-word" className="switch-tool-btn">PDF → Word</Link>
                    
                  </div>

          {/* Compression slider */}
          <div className="quality-box">
            <label>Compression Strength:</label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={quality}
              onChange={(e) => setQuality(parseFloat(e.target.value))}
            />
            <span>{Math.round(quality * 100)}%</span>
          </div>

          {/* Drag and drop */}
          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => document.getElementById("compressInput").click()}
          >
            <p className="blink-text">Drag & drop files here</p>
            <p style={{ fontSize: "12px", color: "#555" }}>
              or click to choose files
            </p>
          </div>

          <input
            id="compressInput"
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp"
            style={{ display: "none" }}
            onChange={(e) => handleFiles(e.target.files)}
          />

          {/* Preview list */}
          <div className="preview-list">
            {files.map((f, index) => (
              <div key={index} className="preview-item">
                <button
                  className="remove-btn"
                  onClick={() =>
                    setFiles((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  ×
                </button>
                <img src={f.preview} className="preview-img" alt="preview" />
                <p className="preview-filename">{f.file.name}</p>
              </div>
            ))}
          </div>

          {files.length > 0 && (
            <button className="convert-btn" onClick={handleCompressAll}>
              Compress & Download
            </button>
          )}

          <div style={{ marginTop: "20px" }}>
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
                <h2 className="long-h1">Image Compression</h2>
                <p className="long-p">File compression reduces the amount of data a file uses, turning a large file into a smaller one without changing its content.</p>
                <p className="long-p">There are two types of image compression.
Lossless compression shrinks your file by removing unnecessary data, keeping the original quality untouched.
Lossy compression removes less important details to greatly reduce size, but this also lowers quality a bit depending on how much compression you apply.</p>
                
                <h2 className="long-h1">Why would you want to compress images?</h2>
                <p className="long-p">The size of an image can vary depending on how it was created. For example, a JPG captured with a professional DSLR camera can be several dozen megabytes—much larger than what you may need for everyday use. In such cases, compressing the image can be extremely helpful.

Similarly, photos stored on your phone can take up significant space on your device. Large image files may even limit how many new photos you can take. Compressing these images can free up valuable storage and help your device run more efficiently.</p>
                <h3 className="long-h1">How does the image compressor work?</h3>
                  <p className="long-p">This tool uses lossy compression to reduce image file sizes. When you upload an image, it’s drawn onto an HTML5 canvas element, which allows us to manipulate the image data directly in your browser. By adjusting the quality parameter when exporting the image from the canvas, we can significantly reduce the file size while maintaining acceptable visual quality. You can control the compression level using the slider, balancing between file size and image clarity according to your needs.</p>

 </div>

      <BottomBanner link="https://example.com" />
      <FooterBar />
    </div>
  );
}
