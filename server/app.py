from flask import make_response
from models._models import *
from config import app

# RUN APP HERE

@app.route("/")
def index():
    return "<h1>Hello, world!</h1>"

if __name__ == "__main__":
    app.run(port=5000, debug=True)