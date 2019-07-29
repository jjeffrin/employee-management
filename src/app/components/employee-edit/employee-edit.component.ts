import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  retrievedId: string;
  employee: EmployeeModel[];
  employeeName: string;
  employeeRole: string;
  constructor(private route: ActivatedRoute,
              private employeeService: EmployeeService,
              private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.retrievedId = params['id'];
        this.employee = this.getEmployeeDetailsById(Number(this.retrievedId));        
      }
    );       
  }

  getEmployeeDetailsById(id: number) {
    return this.employeeService.employeeList.filter(
      (employee) => {
        return employee.id === id;
      }
    )
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(Number(this.retrievedId));
    this.router.navigate(['/']);
  }
}
