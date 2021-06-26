import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { getMaxListeners } from 'process';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  id:number;
  employees: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployees();
    
  }
  
  private getEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees=data;
    });
  }

  update(id:number){
    this.router.navigate(['update-employee/'+id]);
  }

  delete(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
    })
  }

  view(id:number){
    this.router.navigate(['employee-details/'+id]);
  }
}
