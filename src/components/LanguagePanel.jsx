import React, { useState } from "react";

// Example translation map (expand as needed)
const translations = {
  en: {
    title: "Welcome to Our Website",
    about: "About Us",
    services: "Services",
    privacy: "Privacy Policy",
    licence: "Licence",
  },
  am: {
    title: "ወደ ድረ ገጻችን እንኳን በደህና መጡ",
    about: "ስለ እኛ",
    services: "አገልግሎቶች",
    privacy: "ግላዊነት ፖሊሲ",
    licence: "ፍቃድ",
  },
  or: {
    title: "Baga Nagaan Gara Marsariitii Keenya Dhufte",
    about: "Waa'ee Keenya",
    services: "Tajaajiloota",
    privacy: "Heera Zaalummaa",
    licence: "Hayyama",
  }
};

export default function LanguagePanel({ selectedLang, setSelectedLang }) {
  const [previewLang, setPreviewLang] = useState("en");

  return (
    <div className="flex gap-6 w-full">
      
      {/* LANGUAGE SELECTOR */}
      <div className="w-1/3 bg-white p-4 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-3">Choose Language</h3>

        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="en">English</option>
          <option value="am">Amharic (አማርኛ)</option>
          <option value="or">Oromo (Afaan Oromoo)</option>
        </select>

        {/* Preview selector */}
        <h3 className="text-md font-semibold mt-4">Preview</h3>
        <select
          value={previewLang}
          onChange={(e) => setPreviewLang(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="en">English Preview</option>
          <option value="am">Amharic Preview</option>
          <option value="or">Oromo Preview</option>
        </select>
      </div>

      {/* PREVIEW GRID (4x4) */}
      <div className="w-2/3 grid grid-cols-4 gap-3">
        {Object.values(translations[previewLang]).map((text, index) => (
          <div
            key={index}
            className="bg-gray-100 p-3 text-center rounded-lg text-sm shadow-sm"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
