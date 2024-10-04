from sqlalchemy_serializer import SerializerMixin
from config import db


class ProjectSkill(db.Model, SerializerMixin):

    serialize_rules = (
        "-tech_project.project_skills",
        "-tech_project.skills",
        "-skill.project_skills",
        "-skill.tech_projects",
    )

    __tablename__ = "project_skills"

    id = db.Column(db.Integer, primary_key=True)
    added_at = db.Column(db.DateTime, server_default=db.func.now(), nullable=False)

    # Foreign Keys
    tech_project_id = db.Column(db.Integer, db.ForeignKey("tech_projects.id"))
    skill_id = db.Column(db.Integer, db.ForeignKey("skills.id"))

    # Relationships
    tech_project = db.relationship("TechProject", back_populates="project_skills")
    skill = db.relationship("Skill", back_populates="project_skills")

    def __repr(self):
        return f"<ProjectSkill {self.id}>"
