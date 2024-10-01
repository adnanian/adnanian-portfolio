from flask import request, session
from resources._dry_resource import DRYResource
from models.skill import Skill
from config import db, api

class SkillResource(DRYResource):
    """Resource tied to the Skill model. Handles fetch requests for all Skill instances.

    Args:
        DRYResource (DRYResource): simplify RESTFul API building.
    """
    def __init__(self):
        super().__init__(Skill)
        
    def post(self):
        try:
            new_skill = Skill(
                name=request.get_json().get("name"),
                icon_url=request.get_json().get("icon_url"),
                skill_type_id=request.get_json().get("skill_type_id")
            )
            db.session.add(new_skill)
            db.session.commit()
            return new_skill.to_dict(), 200
        except Exception as e:
            return {"message": str(e)}, 422
        
class SkillById(DRYResource):
    """Resource tied to the Skill model. Handles fetch requests for single Skill instances.

    Args:
        DRYResource (DRYResource): simplify RESTFul API building.
    """
    
    def __init__(self):
        super().__init__(Skill)
        
api.add_resource(SkillResource, "/skills")
api.add_resource(SkillById, "/skills/<int:id>", endpoint="skill_by_id")