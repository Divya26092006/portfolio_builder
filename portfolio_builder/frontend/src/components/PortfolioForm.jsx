// frontend/src/components/PortfolioForm.jsx
import React from "react";

export default function PortfolioForm({ formData, setFormData, onGenerate }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onGenerate();
      }}
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "12px", 
        maxWidth: "400px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "#f9f9f9"
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ padding: "12px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      
      <input
        type="text"
        name="tagline"
        placeholder="Tagline (e.g. Full Stack Developer)"
        value={formData.tagline}
        onChange={handleChange}
        style={{ padding: "12px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      
      <textarea
        name="about"
        placeholder="About yourself (2-3 sentences)"
        value={formData.about}
        onChange={handleChange}
        rows={3}
        style={{ padding: "12px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      
      <textarea
        name="skills"
        placeholder="Skills (comma separated: C++, React, Django, Python)"
        value={formData.skills}
        onChange={handleChange}
        rows={2}
        style={{ padding: "12px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      
      <textarea
        name="projects"
        placeholder="Projects (comma separated: Portfolio Builder, Chat App, E-commerce)"
        value={formData.projects}
        onChange={handleChange}
        rows={2}
        style={{ padding: "12px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      
      <input
        type="email"
        name="email"
        placeholder="your.email@example.com"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ padding: "12px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      
      <button 
        type="submit" 
        style={{ 
          padding: "12px", 
          background: "#007bff", 
          color: "white", 
          border: "none", 
          borderRadius: "4px", 
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Generate Portfolio
      </button>
    </form>
  );
}
