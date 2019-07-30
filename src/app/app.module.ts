import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeService } from './services/employee.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
