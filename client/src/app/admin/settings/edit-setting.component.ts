import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder, Validators , FormArray} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { resolve } from 'path';
import { reject } from 'q';
@Component({
  selector: 'app-edit-setting',
  templateUrl: './edit-setting.component.html',
  styleUrls: [
    '../../../assets/css/light-bootstrap-dashboard.css',
    '../../../assets/css/pe-icon-7-stroke.css',
    '../../../assets/css/bootstrap.min.css'

  ]
})
export class EditSettingComponent implements OnInit {
  
  // create an object from FormGroup.
  public settingForm: FormGroup;
  public setting_label:string;
  public errormessage:string;
  public successmessage:string;
  constructor(private _fb:FormBuilder,public userService:UserService,public routePath:ActivatedRoute) { }

  ngOnInit() {
    // define strucher and put validation.
    this.settingForm = this._fb.group({
      setting_label:['',Validators.required],
      field:this._fb.array([
        this.addForm(),
      ])
    })
    this.doMultiple()
    // console.log(this.settingForms);
  }

  // create addForm for adding field in side field array.
  addForm(first = "", second = ""){
    return this._fb.group({
      field_name: [first,Validators.required],
      field_value: [second,Validators.required]

    });
  }

  add(){
    const control = <FormArray>this.settingForm.controls['field'] ;
    control.push(this.addForm());
  }

  remove(index){
    const constrol = <FormArray>this.settingForm.controls['field'];    
    constrol.removeAt(index);
  }


  // call web service and get all field in this array.
  doMultiple(){
    const control = <FormArray>this.settingForm.controls['field'];
    // remove 0 index array from settingForm.controls['field'] array.
    control.removeAt(0);
    this.userService.getSingleSetting(this.routePath.snapshot.paramMap.get('id')).subscribe(
      (response)=>{
        var fields = response.json().data.field;
        // set setting_label value
        this.settingForm.controls['setting_label'].setValue(response.json().data.setting_label);
        
        // set all field in the form.
        for(var i  = 0; i < fields.length; i++){
          control.push(this.addForm(fields[i].field_name,fields[i].field_value));
        }
      },
      (error)=>{
        this.errormessage = "Somthing wrong with your server !";
      }
    );
  }

  // this function help to submit form.
  onSubmit(){
    this.userService.updateSetting(this.settingForm.value,this.routePath.snapshot.paramMap.get('id')).subscribe(
      (response)=>{
        if(response.status === 200){
          this.userService.openSnackBar('Data Updated','');
        }
      },
      (error)=>{
        this.errormessage = "Somthing wrong with your server !";        
      }
    )
  }
}
