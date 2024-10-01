from flask import request, session
from resources._dry_resource import DRYResource
from models.tech_project import TechProject
from config import db, api

class TechProjectResource(DRYResource):
    """Resource tied to the TechProject model. Handles fetch requests for all TechProject instances.

    Args:
        DRYResource (DRYResource): simplify RESTFul API building.
    """
    def __init__(self):
        super().__init__(TechProject)
        
    def post(self):
        try:
            new_tech_project = TechProject(
                title=request.get_json().get("title"),
                headline=request.get_json().get("headline"),
                description=request.get_json().get("description"),
                key_points=request.get_json().get("key_points"),
                work_no=request.get_json().get("work_no"),
                first_version_date=request.get_json().get("first_version_date"),
                current_version_date=request.get_json().get("current_version_date"),
                github_link=request.get_json().get("github_link"),
                demo_link=request.get_json().get("demo_link"),
                live_link=request.get_json().get("live_link")
            )
            db.session.add(new_tech_project)
            db.session.commit()
            return new_tech_project.to_dict(), 200
        except Exception as e:
            return {"message": str(e)}, 422
        
class TechProjectById(DRYResource):
    """Resource tied to the TechProject model. Handles fetch requests for single TechProject instances.

    Args:
        DRYResource (DRYResource): simplify RESTFul API building.
    """
    
    def __init__(self):
        super().__init__(TechProject)
        
api.add_resource(TechProjectResource, "/tech_projects")
api.add_resource(TechProjectById, "/tech_projects/<int:id>", endpoint="tech_project_by_id")