import { AbstractControl } from '@angular/forms';
import { UserService } from '../../../services/user.service';
export class PasswordValidation{

    static MatchPassword(AC: AbstractControl){
        let new_password = AC.get('new_password').value;
        let confirm_password = AC.get('confirm_password').value;
        if(new_password != confirm_password){
            AC.get('confirm_password').setErrors({MatchPassword:true})
        }else{
            return null;
        }
    }

    // static oldPassword(AC:AbstractControl){
        
    //     let old_password = AC.get('old_password').value;
    //     this.userService.checkOldPassword(old_password).subscribe(
    //         (response)=>{
    //             console.log(response);
    //         },
    //         (error)=>{

    //         }
    //     )
    // }
}