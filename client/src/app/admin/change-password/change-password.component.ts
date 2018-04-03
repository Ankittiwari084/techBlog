import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validator, Validators} from '@angular/forms';
import { PasswordValidation } from '../forgot-password/reset-password/password-validation';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['../../../assets/css/light-bootstrap-dashboard.css',
  '../../../assets/css/pe-icon-7-stroke.css',
  '../../../assets/css/bootstrap.min.css',
  './change-password.component.css'  
]
})
export class ChangePasswordComponent implements OnInit {
  changePasswordFrom: FormGroup;
  public serverResponse:boolean;
  constructor(public userService:UserService,public router:Router) { }

  ngOnInit() {
    this.changePasswordFrom = new FormGroup({
      old_password: new FormControl('',Validators.compose([Validators.required,Validators.min(3)])),
      new_password: new FormControl('',Validators.compose([Validators.required,Validators.min(3)])),
      confirm_password: new FormControl('',Validators.compose([Validators.required,Validators.min(3)]))
    },{
      validators:PasswordValidation.MatchPassword            
    }
  )
  }

  onSubmit(){
    this.serverResponse = true;
    this.userService.updatePassword(this.changePasswordFrom.value).subscribe(
      (response)=>{
        this.serverResponse = false;
        this.userService.openSnackBar(response.json().message,'');
      },
      (error)=>{
        this.serverResponse = false;
        this.userService.openSnackBar('Password has not updated may be server problem','');        
      }
    )
  }
  value = "";
  
  update(value:string ){    
    this.userService.checkOldPassword(value).subscribe(
      (response)=>{
        if(response.json().status == false){
          this.changePasswordFrom.get('old_password').setErrors({old_password_errors:true})
        }
      },
      (error)=>{
        this.userService.openSnackBar('Server problem','');
        this.router.navigate(['/admin/change_password']);
      }
    )
  }
}
