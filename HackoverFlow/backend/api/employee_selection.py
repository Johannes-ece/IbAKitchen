from flask import request, Blueprint, jsonify
from HackoverFlow.backend.model_tables.employee_meal_plan import EmployeeMealPlan

employee = Blueprint("file", __name__, template_folder="templates")

meal_plan = ["veg", "non-veg", "meal", "salat"]


@employee.route("/set-meal", methods=["POST"])
def insert_file_metadata():
    data = request.json

    store_metadata = EmployeeMealPlan(
        # data["employeeName"],
        # data["employeeId"],
        data["monday"],
        # data["tuesday"],
        # data["wednesday"],
        # data["thursday"],
        data["friday"],
        #data['salat']
    )

    # EmployeeMealPlan.insert_one(store_metadata.to_json())
    print(store_metadata.to_json())

    return jsonify({"message": "Datapipeline metadata is stored successfully"}), 201


@employee.route("/getMeal", methods=['GET'])
def get_all_s3_files():
    # List objects in the bucket
    try:
        objects = meal_plan
        if objects:
            # files = [obj['Key'] for obj in objects]
            return jsonify(objects)
        else:
            return "The meals list is empty."

    except Exception as e:
        return jsonify({f"Error: {e}"})
