import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from './password-validation';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../../admin.component.css',
  '../forgot-password.component.css',
  '../../../../assets/css/light-bootstrap-dashboard.css'
]
})
export class ResetPasswordComponent implements OnInit {
  token:string;
  resetPasswordForm:FormGroup;
  public serverResponse:boolean;  
  constructor(public router:Router,
              public routePath:ActivatedRoute,
              public userService:UserService,

  ){ 


  }

  ngOnInit() {

    this.resetPasswordForm = new FormGroup({
      'new_password': new FormControl('',Validators.compose([Validators.required])),
      'confirm_password': new FormControl('',Validators.compose([Validators.required]))
    },
    {
      validators:PasswordValidation.MatchPassword
    });
  }

  onSubmit(){
    this.serverResponse = true;
    this.token = this.routePath.snapshot.paramMap.get('token');
    this.userService.checkToken(this.resetPasswordForm.value,this.token).subscribe(
      (response)=>{
        this.serverResponse = false;
        this.userService.openSnackBar(response.json().message,'');            
        this.router.navigate(['/admin/'])              
        
      },
      (error)=>{
        if(error.status == 403 || error.status == 500){
          if(error.json().auth == false){
            this.serverResponse = false;
            this.userService.openSnackBar('Sorry this link has been expaire','');            
            this.router.navigate(['/admin/forgot_password'])              
          }                   
        }
      }
    )
  }
}
