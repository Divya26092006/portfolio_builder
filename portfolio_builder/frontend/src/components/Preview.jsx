// frontend/src/components/Preview.jsx
import React, { useRef } from "react";

export default function Preview({ html }) {
  const iframeRef = useRef(null);

  const handleDownload = () => {
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-portfolio.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ marginTop: "24px" }}>
      <button 
        onClick={handleDownload}
        style={{
          padding: "12px 24px",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "16px"
        }}
      >
        📥 Download Portfolio HTML
      </button>
      <div style={{ 
        border: "2px solid #007bff", 
        borderRadius: "8px", 
        height: "600px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
      }}>
        <iframe
          ref={iframeRef}
          title="Portfolio Preview"
          style={{ width: "100%", height: "100%", border: "none" }}
          srcDoc={html}
        />
      </div>
    </div>
  );
}
