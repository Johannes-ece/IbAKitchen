from flask import request, Blueprint, jsonify
from HackoverFlow.backend.model_tables.employee_meal_plan import EmployeeMealPlan
from HackoverFlow.backend.model_tables.meal_plan import DayMealPlan, WeeklyMealPlan
from HackoverFlow.backend.model_tables.employee_meal_plan import employeeMealPlan, kitchenMaelPlan

employee = Blueprint("file", __name__, template_folder="templates")

meal_plan = ["veg", "non-veg", "meal", "salat"]
weekly_meal_plan = {
    'Monday': {'meat': 'sfnnldvb', 'vegan': 'dmn', 'vegi': 'dvdnlv'},
    'Tuesday': {'meat': 'dvnd', 'vegan': 'VNKJDB', 'vegi': 'vdnlkn'},
    'Wednesday': {'meat': 'vdmn', 'vegan': 'd,vn', 'vegi': 'dfhuihug'},
    'Thursday': {'meat': 'vn ', 'vegan': 'kdlngvnflk', 'vegi': 'dhgh'},
    'Friday': {'meat': 'vdn', 'vegan': 'dBVF', 'vegi': 'SDbvbf'}
}
# employee_bulk = {
#     {
#         "employeeName": "self.employeeName",
#         "employeeID": "self.employeeID",
#         "monday": "self.monday",
#         "tuesday": "self.tuesday",
#         "wednesday": "self.wednesday",
#         "thursday": "self.thursday",
#         "friday": "self.friday",
#         "salat": "self.salat"},
#     {
#         "employeeName": "self.employeeName",
#         "employeeID": "self.employeeID",
#         "monday": "self.monday",
#         "tuesday": "self.tuesday",
#         "wednesday": "self.wednesday",
#         "thursday": "self.thursday",
#         "friday": "self.friday",
#         "salat": "self.salat", },
#     {
#         "employeeName": "self.employeeName",
#         "employeeID": "self.employeeID",
#         "monday": "self.monday",
#         "tuesday": "self.tuesday",
#         "wednesday": "self.wednesday",
#         "thursday": "self.thursday",
#         "friday": "self.friday",
#         "salat": "self.salat", }
# }


@employee.route("/set-meal", methods=["POST"])
def insert_meal_employee_plan():
    data = request.json

    store_metadata = EmployeeMealPlan(
        # data["employeeName"],
        # data["employeeId"],
        data["monday"],
        # data["tuesday"],
        # data["wednesday"],
        # data["thursday"],
        data["friday"],
        # data['salat']
    )
    print(store_metadata.to_json())
    employeeMealPlan.insert_one(store_metadata.to_json())


    return jsonify({"message": "metadata is stored successfully"}), 201


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


@employee.route("/getMealPlan", methods=['GET'])
def get_all_meal():
    # List objects in the bucket
    try:
        objects = weekly_meal_plan
        if objects:
            # files = [obj['Key'] for obj in objects]
            return jsonify(objects)
        else:
            return "The meals list is empty."

    except Exception as e:
        return jsonify({f"Error: {e}"})


@employee.route("/kitchen_plan", methods=["POST"])
def insert_meal_plan():
    data = request.json
    data = request.json

    monday = DayMealPlan(meat=data.get('mondayMeat'), vegi=data.get('mondayVegetarian'),
                         vegan=data.get('mondayVegan'))
    tuesday = DayMealPlan(meat=data.get('tuesdayMeat'), vegi=data.get('tuesdayVegetarian'),
                          vegan=data.get('tuesdayVegan'))
    wednesday = DayMealPlan(meat=data.get('wednesdayMeat'), vegi=data.get('wednesdayVegetarian'),
                            vegan=data.get('wednesdayVegan'))
    thursday = DayMealPlan(meat=data.get('thursdayMeat'), vegi=data.get('thursdayVegetarian'),
                           vegan=data.get('thursdayVegan'))
    friday = DayMealPlan(meat=data.get('fridayMeat'), vegi=data.get('fridayVegetarian'),
                         vegan=data.get('fridayVegan'))

    weekly_plan = {
        "Monday": monday.to_dict(),
        "Tuesday": tuesday.to_dict(),
        "Wednesday": wednesday.to_dict(),
        "Thursday": thursday.to_dict(),
        "Friday": friday.to_dict(),
    }

    print(weekly_plan)
    kitchenMaelPlan.insert_one(weekly_plan)
    # print(request.json)
    return jsonify({"message": "stored successfully"}), 201

#
# @employee.route("/get-employeePlan", methods=['GET'])
# def get_all_meal():
#     # List objects in the bucket
#     # try:
#     #     #objects = employee_bulk
#     #     if objects:
#     #         # files = [obj['Key'] for obj in objects]
#     #         return jsonify("objects")
#     #     else:
#     #         return "The meals list is empty."
#
#     except Exception as e:
#         return jsonify({f"Error: {e}"})

# @employee.route("/get-employeePlan", methods=['GET'])
# def get_all_meal():
#     # List objects in the bucket
#     try:
#         objects = employee_bulk
#         if objects:
#             # files = [obj['Key'] for obj in objects]
#             return jsonify(objects)
#         else:
#             return "The meals list is empty."

#     except Exception as e:
#         return jsonify({f"Error: {e}"})
