from flask import request, session
from resources._dry_resource import DRYResource
from models.project_skill import ProjectSkill
from config import db, api

class ProjectSkillResource(DRYResource):
    """Resource tied to the ProjectSkill model. Handles fetch requests for all ProjectSkill instances.

    Args:
        DRYResource (DRYResource): simplify RESTFul API building.
    """
    def __init__(self):
        super().__init__(ProjectSkill)
        
    def post(self):
        try:
            new_project_skill = ProjectSkill(
                tech_project_id=request.get_json().get("tech_project_id"),
                skill_id=request.get_json().get("skill_id")
            )
            db.session.add(new_project_skill)
            db.session.commit()
            return new_project_skill.to_dict(), 200
        except Exception as e:
            return {"message": str(e)}, 422
        
class ProjectSkillById(DRYResource):
    """Resource tied to the ProjectSkill model. Handles fetch requests for single ProjectSkill instances.

    Args:
        DRYResource (DRYResource): simplify RESTFul API building.
    """
    
    def __init__(self):
        super().__init__(ProjectSkill)
        
api.add_resource(ProjectSkillResource, "/project_skills")
api.add_resource(ProjectSkillById, "/project_skills/<int:id>", endpoint="project_skill_by_id")