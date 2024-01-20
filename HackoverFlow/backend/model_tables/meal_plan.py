class DayMealPlan:
    def __init__(self, meat=None, vegan=None, vegi=None):
        self.meat = meat or ""
        self.vegan = vegan or ""
        self.vegi = vegi or ""

    def to_dict(self):
        return {
            "meat": self.meat,
            "vegan": self.vegan,
            "vegi": self.vegi,
        }


class WeeklyMealPlan:
    def __init__(self, week="", monday=None, tuesday=None, wednesday=None, thursday=None, friday=None, salad=None):
        self.week = week
        self.monday = monday or DayMealPlan()
        self.tuesday = tuesday or DayMealPlan()
        self.wednesday = wednesday or DayMealPlan()
        self.thursday = thursday or DayMealPlan()
        self.friday = friday or DayMealPlan()
        self.salad = salad

    def to_dict(self):
        return {
            "Week": self.week,
            "Monday": self.monday.to_dict(),
            "Tuesday": self.tuesday.to_dict(),
            "Wednesday": self.wednesday.to_dict(),
            "Thursday": self.thursday.to_dict(),
            "Friday": self.friday.to_dict(),
            "salad": self.salad.to_dict(),
        }


# Example usage:
weekly_plan = WeeklyMealPlan(week="first")
