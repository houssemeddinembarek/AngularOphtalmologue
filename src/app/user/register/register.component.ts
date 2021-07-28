import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm!: FormGroup ;
submitted = false;


  constructor(public crudApi: UserService  , public fb:FormBuilder , private router : Router) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group(
      {
        'id': null,
        'username':[null,Validators.compose([Validators.required, Validators.minLength(5)])],
        'role':[null,Validators.required],
        'email':[null,Validators.compose([Validators.required, Validators.minLength(8),Validators.email])],
        'password':[null,Validators.compose([Validators.required, Validators.minLength(8)])],
        'pwdd':[null,Validators.compose([Validators.required, Validators.minLength(8)])],
        acceptTerms:['',[Validators.required]]
      });

  }

//  get f(){}

onReset(){
  this.submitted = false;
  this.registerForm.reset();
}

onSubmit(){
this.submitted = true;
console.log(this.registerForm);

const val = this.registerForm.value;
  if(val.password == val.pwdd){
    this.addData();
  }
}

addData(){
  this.crudApi.createData(this.registerForm.value).subscribe(data=>{
       alert(data);
      this.router.navigate(['/login']);
  })
}

}
