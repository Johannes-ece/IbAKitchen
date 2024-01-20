import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealPlanServiceService {
  getAllEmpMeal(): any {
    return this.http.get(environment.SERVER_URL + "/get-employeePlan") as Observable<any>;
  }

  baseUrl = "/getMeal";
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(environment.SERVER_URL + this.baseUrl) as Observable<any>;
  }
  getplan(){
    return this.http.get(environment.SERVER_URL + "/getMealPlan") as Observable<any>;
  }
  create(mealPlan: any): Observable<any> {
    return this.http.post(environment.SERVER_URL + "/set-meal", mealPlan,
      {headers: {
          "Access-Control-Allow-Origin": "*"
      }});
  }
}
