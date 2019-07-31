import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    children: [
      {
        path: 'addEmployee',
        component: EmployeeAddComponent
      },
      {
        path: 'editEmployee/:id',
        component: EmployeeEditComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
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