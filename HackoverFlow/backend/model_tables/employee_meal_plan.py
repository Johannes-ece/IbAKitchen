class EmployeeMealPlan:
    def __init__(
            self,
            monday,
            tuesday,
            wednesday,
            thursday, friday, salat
    ):
        self.monday = monday
        self.tuesday = tuesday
        self.wednesday = wednesday
        self.thursday = thursday
        self.friday = friday
        self.salat = salat

    def to_json(self):
        return {
            "monday": self.monday,
            "tuesday": self.tuesday,
            "wednesday": self.wednesday,
            "thursday": self.thursday,
            "friday": self.friday,
            "salat": self.salat,
        }
