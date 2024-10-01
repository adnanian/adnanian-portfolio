from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from models.project_skill import ProjectSkill

from config import db


class Skill(db.Model, SerializerMixin):

    serialize_rules = (
        '-skill_type.skills',
        '-project_skills.skill_id',
        '-project_skills.tech_project_id'
        '-project_skills.skill',
        '-project_skills.tech_project',
        '-tech_projects.project_skills',
        '-tech_projects.skills',
    )
    
    __tablename__ = "skills"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    icon_url = db.Column(db.String)

    # Foreign Keys Here
    skill_type_id = db.Column(db.Integer, db.ForeignKey("skill_types.id"))

    # Relationships
    skill_type = db.relationship("SkillType", back_populates="skills")
    project_skills = db.relationship(
        "ProjectSkill", back_populates="skill", cascade="all, delete-orphan"
    )

    # Association Proxies
    tech_projects = association_proxy(
        "project_skills",
        "tech_project",
        creator=lambda tp_obj: ProjectSkill(tech_project=tp_obj),
    )

    def __repr__(self):
        return f"<Skill {self.id}, {self.icon_url}>"