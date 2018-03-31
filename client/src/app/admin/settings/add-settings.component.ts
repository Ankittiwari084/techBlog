import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { FormControl, FormGroup, Validators, FormBuilder,FormArray } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Addsettings',
  templateUrl: './add-settings.component.html',
  styleUrls: [
    '../../../assets/css/light-bootstrap-dashboard.css',
    '../../../assets/css/pe-icon-7-stroke.css',
    '../../../assets/css/bootstrap.min.css'

  ]
})
export class AddSettingsComponent implements OnInit {

  public settingForm: FormGroup;
  errormessage:string ;
  successmessage:string;
  class:string;

  constructor(private _fb:FormBuilder,public userService:UserService,private router:Router){

  }

  ngOnInit(){
    this.settingForm = this._fb.group({
      setting_label: ['',Validators.required],
      field:this._fb.array([
        this.addForm(),
      ])
    });
  }

  addForm(){
    return  this._fb.group({
      field_name: ['',Validators.required],
      field_value: ['',Validators.required]
    });
  }
  add(){
    const constrol = <FormArray>this.settingForm.controls['field'];
      constrol.push(this.addForm());  
  }
  remove(index){
    const constrol = <FormArray>this.settingForm.controls['field'];    
    constrol.removeAt(index);
  }

  onSubmit(){
    //console.log(this.settingForm.get('field').controls[0].constrol);
   
    this.userService.addSetting(this.settingForm.value).subscribe(
      (response)=>{
        if(response.status == 200){
          this.userService.openSnackBar('Setting Added successfully','');
          setTimeout(() => {
          
          //this.settingForm.reset();
            this.router.navigate(['/admin/setting']);
          }, 300);
        }
      },
      (error)=>{
        this.errormessage = "Somthing wrong with your server";
      }
    )
  }
}
