from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from config import db

class Skill(db.Model, SerializerMixin):
    
    __tablename__ = 'skills'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    icon_url = db.Column(db.String)
    
    # Foreign Keys Here
    