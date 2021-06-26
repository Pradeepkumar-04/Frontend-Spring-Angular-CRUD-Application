import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8080/api/v1/employees";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Employee[]> { 
    return this.http.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee:Employee): Observable<Object>{
    return this.http.post(`${this.baseURL}`,employee)
  }

  getEmployeeById(id:number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id:number,employee:Employee): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`,employee);
  }

  deleteEmployee(id:number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
