import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee: Employee=new Employee();
  constructor(private employeeservice:EmployeeService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.employeeservice.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    })
  }
  onSubmit(){
    this.employeeservice.updateEmployee(this.id,this.employee).subscribe(()=>{
      this.goToEmployeeList();
    },error=>console.log(error))
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
