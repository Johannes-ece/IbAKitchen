class EmployeeMealPlan:
    def __init__(
            self,
            # employee_name,
            # employee_id,
            monday,
            # tuesday,
            # wednesday,
            # thursday,
            friday#,
          #  salat
    ):
        # self.employeeName = employee_name
        # self.employeeID = employee_id
        self.monday = monday
        # self.tuesday = tuesday
        # self.wednesday = wednesday
        # self.thursday = thursday
        self.friday = friday
        # self.salat = salat

    def to_json(self):
        return {
            # "employeeName": self.employeeName,
            # "employeeID": self.employeeID,
            "monday": self.monday,
            # "tuesday": self.tuesday,
            # "wednesday": self.wednesday,
            # "thursday": self.thursday,
            "friday": self.friday,
            # "salat": self.salat,
        }
