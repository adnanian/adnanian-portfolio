from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from config import db

class TechProject(db.Model, SerializerMixin):
    
    __tablename__ = 'tech_projects'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    headline = db.Column(db.String)
    