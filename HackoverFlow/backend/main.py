from flask import Flask, url_for, redirect
import os
from dotenv import load_dotenv
from api.employee_selection import employee
from flask_cors import CORS

app = Flask(__name__)
# TODO get origin figured out nicely
CORS(app)

app.register_blueprint(employee)

if __name__ == "__main__":
    load_dotenv()
    # Please do not set debug=True in production
    app.run(host=os.getenv("HOST_URL"), port=int(os.getenv("HOST_PORT")), debug=True)
