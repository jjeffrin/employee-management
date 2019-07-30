import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

const appRoutes: Routes = [
  {
    path: 'addEmployee',
    component: EmployeeAddComponent
  },
  {
    path: 'editEmployee/:id',
    component: EmployeeEditComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})

export class AppRoutingModule {
  
}