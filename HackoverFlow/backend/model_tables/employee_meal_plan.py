from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(
    host=os.getenv("MONGODB_URL"),
    port=int(os.getenv("MONGODB_PORT")),
)

db = client["iba-Kitchen"]
user = db["user"]
employeeMealPlan = db["employeeMealPlan"]
kitchenMaelPlan = db["kitchenMaelPlan"]


class EmployeeMealPlan:
    def __init__(
            self,
            # employee_name,
            # employee_id,
            monday=None,
            tuesday=None,
            wednesday=None,
            thursday=None,
            friday=None,
            salat=None
    ):
        # self.employeeName = employee_name
        # self.employeeID = employee_id
        self.monday = monday
        self.tuesday = tuesday
        self.wednesday = wednesday
        self.thursday = thursday
        self.friday = friday
        self.salat = salat

    def to_json(self):
        return {
            # "employeeName": self.employeeName,
            # "employeeID": self.employeeID,
            "monday": self.monday,
            "tuesday": self.tuesday,
            "wednesday": self.wednesday,
            "thursday": self.thursday,
            "friday": self.friday,
            "salat": self.salat,
        }
