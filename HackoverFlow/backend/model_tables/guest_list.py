class EmployeeMealPlan:
    def __init__(
            self,
            employee_name,
            employee_id,
            guestName,
            guestDate,
            GuestDish
    ):
        self.employeeName = employee_name
        self.employeeID = employee_id
        self.guestName = guestName
        self.guestDate = guestDate
        self.GuestDish = GuestDish

    def to_json(self):
        return {
            "employeeName": self.employeeName,
            "employeeID": self.employeeID,
            "guestName": self.guestName,
            "guestDate": self.guestDate,
            "GuestDish": self.GuestDish,
        }
