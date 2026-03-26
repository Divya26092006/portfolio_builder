import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def load_template(filename):
    path = os.path.join(BASE_DIR, "templates_raw", filename)
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

TEMPLATES = [
    {"id": 1, "name": "Dark Minimal", "preview_image": "https://via.placeholder.com/300x200/0d1117/58a6ff/1?text=DARK+MINIMAL", "filename": "template1.html"},
    {"id": 2, "name": "Light Sidebar", "preview_image": "https://via.placeholder.com/300x200/f8fafc/1e40af/1?text=LIGHT+SIDEBAR", "filename": "template2.html"},
    {"id": 3, "name": "Gradient Cards", "preview_image": "https://via.placeholder.com/300x200/667eea/ffffff/1?text=GRADIENT+CARDS", "filename": "template3.html"},
    {"id": 4, "name": "Neon Glow", "preview_image": "https://via.placeholder.com/300x200/000000/00ff88/1?text=NEON+GLOW", "filename": "template4.html"},
    {"id": 5, "name": "Glassmorphism", "preview_image": "https://via.placeholder.com/300x200/a8edea/1e293b/1?text=GLASSMORPHISM", "filename": "template5.html"},
    {"id": 6, "name": "Retro 80s", "preview_image": "https://via.placeholder.com/300x200/001100/00ff41/1?text=RETRO+80S", "filename": "template6.html"},
    {"id": 7, "name": "Corporate Clean", "preview_image": "https://via.placeholder.com/300x200/3b82f6/ffffff/1?text=CORPORATE+CLEAN", "filename": "template7.html"},
    {"id": 8, "name": "Minimal White", "preview_image": "https://via.placeholder.com/300x200/ffffff/111827/1?text=MINIMAL+WHITE", "filename": "template8.html"},
    {"id": 9, "name": "Dark Cards", "preview_image": "https://via.placeholder.com/300x200/1e1e2e/60a5fa/1?text=DARK+CARDS", "filename": "template9.html"},
    {"id": 10, "name": "Colorful Blocks", "preview_image": "https://via.placeholder.com/300x200/667eea/ffffff/1?text=COLORFUL+BLOCKS", "filename": "template10.html"},
]

def get_template_with_html(template_id):
    t = next((x for x in TEMPLATES if x["id"] == template_id), None)
    if not t:
        return None
    html = load_template(t["filename"])
    return {
        "id": t["id"],
        "name": t["name"],
        "preview_image": t["preview_image"],
        "html": html,
    }
