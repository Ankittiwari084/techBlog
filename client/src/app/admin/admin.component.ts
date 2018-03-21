import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router }  from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  errorMessage:string = "";
  constructor(private userServices:UserService,public router:Router,public authService: AuthService) { }
  loginForm: FormGroup;
  //user = JSON.parse(localStorage.getItem('userData'));
  finalResponce:any;
  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('',Validators.compose([Validators.required,Validators.email])),
      'password': new FormControl(null,Validators.compose([Validators.required,Validators.minLength(4)]))
    });
    this.checkLogin();

  }

  onSubmit(){
    this.userServices.loginServices(this.loginForm.value).subscribe(
      (response) => {
        if(response.status == 200){
          console.log(response.json().data);
         this.finalResponce =  response.json().data;
          localStorage.setItem(
            'userData',
            JSON.stringify(
              {
                'token':this.finalResponce[1].token,'otherDetail':this.finalResponce[0]
              }));        
          this.errorMessage = "";
          this.router.navigate(['/admin/dashboard']);
        }else{
          this.errorMessage = "Email Id or password is invalid";
        }
      },
      (error)=>{
        this.errorMessage = "Somthing wrong with your server";
      }
    );
  }

  // check if user login then redirect dashboard page.
  checkLogin(){
    this.authService.isAuthenticated().then((authentication:boolean)=>{
      if(authentication){
        this.router.navigate(['admin/dashboard'])
      }
    })
  }
 
}
