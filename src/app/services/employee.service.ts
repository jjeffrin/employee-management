import { Injectable, EventEmitter } from '@angular/core';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  onNewEmployeeAdd = new EventEmitter<EmployeeModel>();
  idToDelete: number;
  employeeList = [
    {
      id: 1,
      name: 'Admin',
      role: 'System Admin'
    }
  ];

  constructor() { }

  saveEmployee(employee: EmployeeModel): void {
    this.employeeList.push(employee);
  }

  deleteEmployee(id: number): void {
    this.idToDelete = this.employeeList.indexOf(this.employeeList.filter(
      (employee) => {
        return employee.id === id;
      }
    )[0]);
    console.log(this.idToDelete);   
    this.fireEmployee(this.idToDelete);
  }

  fireEmployee(id: number) {
    this.employeeList.splice(id, 1);
  }
}
