import { AbstractControl } from '@angular/forms';
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
}