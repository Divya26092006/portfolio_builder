// frontend/src/components/TemplateList.jsx
import React from "react";

export default function TemplateList({ templates, onSelect, selectedId }) {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {templates.map((t) => (
        <div
          key={t.id}
          onClick={() => onSelect(t.id)}
          style={{
            border: t.id === selectedId ? "2px solid #007bff" : "1px solid #ccc",
            borderRadius: "8px",
            padding: "8px",
            cursor: "pointer",
            width: "220px",
            boxShadow: t.id === selectedId ? "0 4px 12px rgba(0,123,255,0.3)" : "none",
          }}
        >
          <img
            src={t.preview_image}
            alt={t.name}
            style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "4px" }}
          />
          <h4 style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>{t.name}</h4>
        </div>
      ))}
    </div>
  );
}
