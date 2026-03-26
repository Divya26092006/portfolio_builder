// frontend/src/api.js
import axios from "axios";

const API_BASE = "http://127.0.0.1:8000/api";

export const getTemplates = () =>
  axios.get(`${API_BASE}/templates/`).then((res) => res.data);

export const getTemplateDetail = (id) =>
  axios.get(`${API_BASE}/templates/${id}/`).then((res) => res.data);
