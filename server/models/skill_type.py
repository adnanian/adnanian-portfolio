from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from config import db


class SkillType(db.Model, SerializerMixin):

    __tablename__ = "skill_types"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)

    # Relationships
    skills = db.relationship(
        "Skill", back_populates="skill_type", cascade="all, delete-orphan"
    )

    def __repr__(self):
        return f"<SkillType id={self.id}, name={self.name}>"
