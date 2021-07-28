import { EmployeeService } from './../shared/services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/model/employee';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[]=[];

  constructor(private employeeService : EmployeeService) { }

  
  ngOnInit(): void {
    this.getEmployees();
  }
  
  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response:Employee[]) =>{
          this.employees = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onOpenModal(employee: Employee , mode:string):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type='button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add'){
      button.setAttribute('data-target','#addEmployeeModal');
    }
    if (mode === 'edit'){
      button.setAttribute('data-target','#updateEmployeeModal');
    }
    if (mode === 'delete'){
      button.setAttribute('data-target','#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }


 
    

}
