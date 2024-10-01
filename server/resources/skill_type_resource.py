from flask import request, session
from resources._dry_resource import DRYResource
from models.skill_type import SkillType
from config import db, api

class SkillTypeResource(DRYResource):
    """Resource tied to the SkillType model. Handles fetch requests for all SkillType instances.

    Args:
        DRYResource (DRYResource): simplify RESTFul API building.
    """
    def __init__(self):
        super().__init__(SkillType)
        
    def post(self):
        try:
            new_skill_type = SkillType(
                name=request.get_json().get("name")
            )
            db.session.add(new_skill_type)
            db.session.commit()
            return new_skill_type.to_dict(), 200
        except Exception as e:
            return {"message": str(e)}, 422
        
class SkillTypeById(DRYResource):
    """Resource tied to the SkillType model. Handles fetch requests for single SkillType instances.

    Args:
        DRYResource (DRYResource): simplify RESTFul API building.
    """
    
    def __init__(self):
        super().__init__(SkillType)
        
api.add_resource(SkillTypeResource, "/skill_types")
api.add_resource(SkillTypeById, "/skill_types/<int:id>", endpoint="skill_type_by_id")