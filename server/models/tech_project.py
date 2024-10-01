from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from models.project_skill import ProjectSkill

from config import db


class TechProject(db.Model, SerializerMixin):

    serialize_rules = (
        '-skills.tech_projects',
        '-skills.project_skills',
        '-project_skills.tech_project'
    )

    __tablename__ = "tech_projects"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, unique=True, nullable=False)
    headline = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    key_points = db.Column(db.ARRAY(db.String))
    work_no = db.Column(db.Integer, unique=True, nullable=False)
    first_version_date = db.Column(
        db.Date, nullable=False
    )  # The date of first version completion
    current_version_date = db.Column(
        db.Date, nullable=False
    )  # The date of the current version
    github_link = db.Column(db.String)
    demo_link = db.Column(db.String)
    live_link = db.Column(db.String)

    # Relationships
    project_skills = db.relationship(
        "ProjectSkill", back_populates="tech_project", cascade="all, delete-orphan"
    )

    # Association Proxies
    skills = association_proxy(
        "project_skills",
        "skill",
        creator=lambda skill_obj: ProjectSkill(skill=skill_obj),
    )

    def __repr__(self):
        output = "<TechProject\n"
        output += f"{self.id}, {self.title}, {self.headline}\n"
        output += f"{self.description}\n"
        output += (
            f"{self.work_no}, {self.first_version_date}, {self.current_version_date}\n"
        )
        output += f"{self.github_link}\n"
        output += f"{self.demo_link}\n"
        output += f"{self.live_link}>"

        return output
