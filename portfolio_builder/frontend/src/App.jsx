// frontend/src/App.jsx
import React, { useEffect, useState } from "react";
import { getTemplates, getTemplateDetail } from "./api";
import TemplateList from "./components/TemplateList";
import PortfolioForm from "./components/PortfolioForm";
import Preview from "./components/Preview";

function generateHtml(templateHtml, formData) {
  const skillsArray = formData.skills
    ?.split(",")
    .map((s) => s.trim())
    .filter(Boolean) || [];
  const projectsArray = formData.projects
    ?.split(",")
    .map((p) => p.trim())
    .filter(Boolean) || [];

  const skillsHtml = skillsArray.map((s) => `<span class="badge pill">${s}</span>`).join(" ");
  const projectsHtml = projectsArray
    .map((p) => `<div class="project project-item">${p}</div>`)
    .join("");

  const name = formData.name || "";
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase())
    .join("")
    .slice(0, 2);

  let html = templateHtml;
  html = html.replaceAll("{{NAME}}", name);
  html = html.replaceAll("{{TAGLINE}}", formData.tagline || "");
  html = html.replaceAll("{{ABOUT}}", formData.about || "");
  html = html.replaceAll("{{EMAIL}}", formData.email || "");
  html = html.replaceAll("{{INITIALS}}", initials || "?");
  html = html.replaceAll("{{SKILLS}}", skillsHtml);
  html = html.replaceAll("{{PROJECTS}}", projectsHtml);

  return html;
}

export default function App() {
  const [templates, setTemplates] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedTemplateHtml, setSelectedTemplateHtml] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    about: "",
    skills: "",
    projects: "",
    email: "",
  });
  const [finalHtml, setFinalHtml] = useState("");

  useEffect(() => {
    getTemplates().then(setTemplates).catch(console.error);
  }, []);

  const handleSelectTemplate = (id) => {
    setSelectedId(id);
    setFinalHtml("");
    getTemplateDetail(id)
      .then((data) => {
        setSelectedTemplateHtml(data.html);
      })
      .catch(console.error);
  };

  const handleGenerate = () => {
    if (!selectedTemplateHtml) {
      alert("Please select a template first.");
      return;
    }
    const html = generateHtml(selectedTemplateHtml, formData);
    setFinalHtml(html);
  };

  return (
    <div style={{ padding: "24px", fontFamily: "system-ui, sans-serif", maxWidth: "1400px", margin: "0 auto" }}>
      <h1 style={{ color: "#1f2937", marginBottom: "8px" }}>🎨 Portfolio Builder</h1>
      <p style={{ color: "#6b7280", marginBottom: "32px" }}>
        Select a template, fill your details, generate, and download your portfolio!
      </p>

      <h2 style={{ color: "#374151", marginBottom: "16px" }}>1. Choose Template</h2>
      <TemplateList
        templates={templates}
        onSelect={handleSelectTemplate}
        selectedId={selectedId}
      />

      {selectedId && (
        <>
          <h2 style={{ color: "#374151", marginTop: "40px", marginBottom: "16px" }}>2. Fill Your Details</h2>
          <PortfolioForm
            formData={formData}
            setFormData={setFormData}
            onGenerate={handleGenerate}
          />
        </>
      )}

      {finalHtml && (
        <>
          <h2 style={{ color: "#374151", marginTop: "40px", marginBottom: "16px" }}>3. Preview & Download</h2>
          <Preview html={finalHtml} />
        </>
      )}
    </div>
  );
}
