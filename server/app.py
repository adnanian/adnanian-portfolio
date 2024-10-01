from flask import request, g, make_response
from models._models import *
from resources._resources import *
from config import app, db, api

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

if __name__ == "__main__":
    app.run(port=5000, debug=True)