from rest_framework.response import Response
from rest_framework.decorators import api_view
from .templates_data import TEMPLATES, get_template_with_html

@api_view(["GET"])
def templates_list(request):
  data = [
      {
          "id": t["id"],
          "name": t["name"],
          "preview_image": t["preview_image"],
      }
      for t in TEMPLATES
  ]
  return Response(data)

@api_view(["GET"])
def template_detail(request, pk):
  t = get_template_with_html(pk)
  if not t:
      return Response({"detail": "Not found"}, status=404)
  return Response(t)
