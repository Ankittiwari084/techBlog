import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../admin.component.css',
  './forgot-password.component.css'
]
})
export class ForgotPasswordComponent implements OnInit {
  public serverResponse:boolean;
  constructor(public userService:UserService) { }
  forgotPasswordForm:FormGroup;
  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      'email': new FormControl('',Validators.compose([Validators.required,Validators.email]))
    });    
  }
  
  onSubmit(){
    this.serverResponse = true;
    console.log(this.forgotPasswordForm.value);
    this.userService.forgotPassword(this.forgotPasswordForm.value).subscribe(
      
      (response)=>{
        this.serverResponse = false;
        if(response.status == 200){
          this.userService.openSnackBar('Please open your email and click link!','')
        }
      },
      (err)=>{
        this.serverResponse = false;
        this.userService.openSnackBar(err.json().message,'')
      }
    );
  }

}
