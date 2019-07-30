import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employeeName: string;
  employeeRole: string;
  employeeId: number;
  employee: object;

  constructor(private employeeService: EmployeeService,
              private router: Router
    ) { }

  ngOnInit() {
    this.updateEmployeeId();
  }
  
  updateEmployeeId() {
    this.employeeId = this.employeeService.employeeList.length + 1;
  }

  addEmployee() {
    this.employeeService.saveEmployee({
      id: this.employeeId,
      name: this.employeeName,
      role: this.employeeRole
    });
    this.employeeName = this.employeeRole = '';
    this.updateEmployeeId();
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

}
