from flask import request, g, send_from_directory, jsonify
from models._models import *
from resources._resources import *
from config import app, db, api
import os

# RUN APP HERE

@app.before_request
def get_record_by_id():
    """If accessing a model record, this view will run to get the model by id. The correct model will be matched by
      the endpoint.

    Returns:
        any: if the model record does not exist, then a "not found" message will be returned; otherwise, returns nothing.
    """
    endpoint_model_map = {
        "skill_type_by_id": SkillType,
        "skill_by_id": Skill,
        "tech_project_by_id": TechProject,
        "project_skill_by_id": ProjectSkill
    }
    if model := endpoint_model_map.get(request.endpoint):
        id = request.view_args.get("id")
        if record := model.query.filter_by(id=id).first():
            g.record = record
        else:
            return {
                "error": f"{model.__name__} record of id, {id}, does not exist. Please try again later."
            }, 404
    # # print(request.endpoint)

@app.route("/")
def index():
    return "<h1>Hello, world!</h1>"

@app.route("/get-all-images", methods=["GET"])
def get_all_images():
    try:
        files = os.listdir("./files")
        image_files = [f for f in files if f.endswith(('.png', '.jpg', ))]
        image_urls = [f'http://localhost:5000/get-image/{image_name}' for image_name in image_files]
        return jsonify({"image_urls": image_urls})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to fetch an image by name
@app.route('/get-image/<image_name>', methods=['GET'])
def get_image(image_name):
    return send_from_directory("./files", image_name)

if __name__ == "__main__":
    app.run(port=5000, debug=True)