import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../../src/App.css";
import GoogleAd from "./../components/GoogleAd";
import TopBar from "./../components/TopBanner";
import BottomBanner from "./../components/BottomBanner";
import FooterBar from "./../components/FooterBar";
import { saveAs } from "file-saver";

export default function App() {
  const [files, setFiles] = useState([]);
  const [selectedLang, setSelectedLang] = useState("en");

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

  const handleConvert = () => {
    files.forEach(({ file, preview }) => {
      const img = new Image();
      img.src = preview;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            saveAs(blob, file.name.replace(".jpg", ".png"));
          },
          "image/png",
          1
        );
      };
    });
  };

  return (
    <div className="app-container">

{/* TOP BAR WITH LANGUAGE */}
  <TopBar selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
        <div className="long">
        <h1>JPG2PNGOnline – Convert JPG to PNG Instantly</h1>
          <p className="long-p">JPG2PNGOnline is a free online JPG to PNG converter that allows you to convert images instantly. </p>
           <p className="long-p">Convert JPG to PNG with high quality, no signup, and unlimited usage.</p>
        </div>  
           <div className="horizontal-ad">
            <GoogleAd slot="4444444444" />
            </div>
            <div className="main-layout">
        {/* LEFT SIDE AD */}
        <div className="side-banner">
          <GoogleAd slot="1111111111" />
        </div>
        {/* CENTER CONTENT */}
        <div className="center-box">
          <h1>JPG to PNG Converter</h1>
          <p>Upload JPG files or drag & drop multiple files.</p>
                  {/* Switch navigation */}
                  <div className="button-container">
                    <Link to="/png-to-jpg" className="switch-tool-btn">PNG → JPG</Link>
                    <Link to="/compress-image" className="switch-tool-btn">Compress Image</Link>
                    <Link to="/jpg-to-pdf" className="switch-tool-btn">JPG → PDF</Link>
                    
                  </div>
                  {/* Drag & Drop Box */}
                  <div
                  className="drop-zone"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("fileInput").click()}
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
                      or click to choose Files</p>
                      </div>


          {/* Hidden Input */}
          <input
            id="fileInput"
            type="file"
            accept="image/jpeg"
            multiple
            style={{ display: "none" }}
            onChange={(e) => handleFiles(e.target.files)}
          />

          {/* Preview Section */}
<div className="preview-list">
  {files.map((f, index) => (
    <div key={index} className="preview-item">
      
      {/* REMOVE BUTTON */}
      <button
        className="remove-btn"
        title="Remove file"
        onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
      >
        ×
      </button>

      {/* IMAGE PREVIEW */}
      <img src={f.preview} className="preview-img" alt={f.file.name} />
      <p className="preview-filename">{f.file.name}</p>

 
    </div>
  ))}
</div>
          {/* Convert Button */}
          {files.length > 0 && (
            <button className="convert-btn" onClick={handleConvert}>
              Download
            </button>
          )}
          {/* Horizontal Google Ad below preview */}
           <div className="horizontal-ad">
            <GoogleAd slot="4444444444" />
            </div>
        </div>
        {/* RIGHT SIDE AD */}
        <div className="side-banner">
          <GoogleAd slot="2222222222" />
        </div>
      </div>
      <div className="long">
          <h2 className="long-h1">JPG to PNG Conversion</h2>
          <p className="long-p">Files that end in .JPG and .PNG are image files. They contain visual information, usually photographs, drawings, screenshots, or other types of media.</p>
          <p className="long-p">However, JPGs (or sometimes JPEGs) are different from PNGs. With a JPG, you have a file with lossy quality. This means that image compression has removed some of its overall quality. When you create a JPG, you can choose how lossy it gets. Generally, the higher the quality of the image, the bigger its filesize, so compressing an image can help make it take up less space on your hard drive.</p>
          <p className="long-p">Meanwhile, PNGs are lossless, which means they are not compressed. PNGs also support transparency, which JPGs do not. Transparency allows for specific pixels in the image to be empty, which can be useful when placing one image on top of another. PNGs, unfortunately, do not support CMYK color spaces, though, which makes them not as effective for printing.</p>
          <h2 className="long-h1">Why should you convert JPG to PNG?</h2>
          <p className="long-p">The biggest reason to convert JPG files to PNG is to create transparency support. If you have an image with a lot of white space that you’d like to remove in editing software, you won’t be able to do it. JPGs must have color information within every pixel, so empty pixels are usually filled with black or white colors.</p>
          <p className="long-p">PNGs also don’t get compressed. So if you’re uploading a PNG to a service that compresses images, your PNG upload will look the same as it does on your computer. This can be helpful if you have a very special or specific image that you want to be preserved.</p>
          <p className="long-p">However, you should beware of converting JPG to PNG if you want to eventually print the image. Since PNG files don’t contain CMYK information, printing them is tricky. We’d advise keeping the original JPG if you think you might want to print it in the future.</p>
          <h2 className="long-h1">How to convert PNG files to JPG for free?</h2>
          <p className="long-p">First, you’ll need to upload a JPG file into our tool above. Hit the “UPLOAD FILES” button and find your JPG file(s) to get started. You can also drag and drop your files into the box that says “Drop Your Files Here”. Keep in mind, however, that you can only upload up to 20 files at one time.</p>
          <p className="long-p">Once uploaded, you’ll see our tool convert the files in real time. When finished, you can download each of them one-by-one by clicking the “DOWNLOAD” button under each image. If you have a lot of them, you can save time by downloading them all at once in ZIP format. Just hit the “DOWNLOAD ALL” button to do so.</p>
          <p className="long-p">If after uploading your files you still want to do more conversions, that’s OK! You can repeat this process as many times as you need. Just keep in mind you can only convert in batches of 20 at the most.</p>
          <p className="long-p">Once you’ve converted your files, you have one hour to download them. Be sure to download your files before this time limit is over, as you will need to do your conversion again if you wait too long.</p>
          <h2 className="long-h1">Is it safe to convert JPG to PNG online?</h2>
          <p className="long-p">It is totally safe to use our tool to convert your files. Your original file remains untouched on your phone, tablet, or computer, so you can always go back to the original if the converted file doesn’t work for you.</p>
          <p className="long-p">Additionally, after you convert and download your files, they are deleted from our servers after one hour. This ensures that your files are not stored indefinitely and helps protect your privacy.</p>
        </div>

     {/* BOTTOM BANNER AD */}
  <BottomBanner link="https://example.com" />

  {/* FOOTER BAR */}
  <FooterBar />
</div>

  );
}
