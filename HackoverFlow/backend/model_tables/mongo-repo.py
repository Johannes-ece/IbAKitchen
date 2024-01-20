from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(
    host=os.getenv("MONGODB_URL"),
    port=int(os.getenv("MONGODB_PORT")),
    username=os.getenv("MONGODB_USER"),
    password=os.getenv("MONGODB_PASSWORD"),
    authSource="admin",
)

db = client["iba-Kitchen"]
user = db["user"]
employeeMealPlan = db["employeeMealPlan"]
kitchenMaelPlan = db["kitchenMaelPlan"]

