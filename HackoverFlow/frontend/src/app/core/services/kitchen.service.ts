import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {
  baseUrl = "/kitchen_plan";

  constructor(private http: HttpClient) { }

  create(plan :any) : Observable<any>{
    return this.http.post(environment.SERVER_URL + this.baseUrl, plan,
  {headers: {
    "Access-Control-Allow-Origin": "*"
}});}
}
