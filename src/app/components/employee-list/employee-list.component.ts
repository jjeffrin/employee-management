import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeModel[] = this.employeeService.employeeList;
  
  constructor(
    private employeeService: EmployeeService,
    private router: Router
    ) { }

  ngOnInit() {

  }
  addNewEmployee() {
    this.router.navigate(['/addEmployee']);
  }
}
