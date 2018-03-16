import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  errorMessage:string = "";
  constructor(private userServices:UserService,public router:Router) { }
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('',Validators.compose([Validators.required,Validators.email])),
      'password': new FormControl(null,Validators.compose([Validators.required,Validators.minLength(4)]))
    });
  }

  onSubmit(){
    this.userServices.loginServices(this.loginForm.value).subscribe(
      (response) => {
        if(response.status == 200){
          this.errorMessage = "";
          this.router.navigate(['home']);
        }else{
          this.errorMessage = "Email Id or password is invalid";
        }
      },
      (error)=>{
        this.errorMessage = "Somthing wrong with your server";
      }
    );
  }

 
}
