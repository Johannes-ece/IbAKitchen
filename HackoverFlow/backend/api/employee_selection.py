from flask import request, Blueprint, jsonify

employee = Blueprint("file", __name__, template_folder="templates")