import { Injectable } from '@angular/core';
import { Http, Headers,  } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import {RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Setting } from '../models/setting.model';
import { Categories } from '../models/categories.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UserService {
  

  constructor(private http:Http,public routePath:ActivatedRoute,public snackBar: MatSnackBar) {}
  loginServices(userData){
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post(environment.apiUrl+'admin/login/',userData,
    {headers:headers}
  );
  }

  addSetting(settingData){

    return this.http.post(
        environment.apiUrl+'admin/add_setting',settingData,
        {headers:this.getHeader()}
    );
  };

  getSetting(){
    return this.http.get(environment.apiUrl+'admin/get_setting/',{headers:this.getHeader()});
  }
  // this function help to get token
  getToken(){
    return JSON.parse(localStorage.getItem('userData')).token;
  }

  getHeader(){
    return new Headers({'Content-Type':'application/json','x-access-token':this.getToken()});
  }

  setHeaderWithToken(token){
    return new Headers({'Content-Type':'application/json','x-access-token':token});
    
  }

  getSingleSetting(id){
    return  this.http.get(environment.apiUrl+'admin/get_setting/'+id,{headers:this.getHeader()});
  }

  json(response){
    return response.json().data;
  }

  updateSetting(postData,id){
    return this.http.put(environment.apiUrl+'admin/update_setting/'+id,postData,
      {headers:this.getHeader()}
    );
  }

  deleteSetting(id){
    return this.http.get(environment.apiUrl+'admin/delete_setting/'+id,
      {headers:this.getHeader()}
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,      
    });
  }

  forgotPassword(value){
    return this.http.post(environment.apiUrl+'admin/send_email_forgot_password/',value
    );
  }
  checkToken(value,token){
    return this.http.post(environment.apiUrl+'admin/verify_token/',value,{
      headers:this.setHeaderWithToken(token)
    });
  }

  checkOldPassword(value){
    
    return this.http.post(environment.apiUrl+'admin/get_old_Password/',{'old_password':value},{
      headers:this.getHeader()
    }); 
  }

  updatePassword(formValue){
    return this.http.post(environment.apiUrl+'admin/change_password/',{'confirm_password':formValue.confirm_password,'ew_password':formValue.new_password},{
      headers:this.getHeader()
    });    
  }

  getCategories(){
    return this.http.get(environment.apiUrl+'admin/get_categories',{
      headers:this.getHeader()
    });
  }

  addCategory(value){
    return this.http.post(environment.apiUrl+'admin/add_category',value,{
      headers:this.getHeader()
    })
  }

  deleteCategory(id){
    return this.http.get(environment.apiUrl+'admin/delete_category/'+id,
    {headers:this.getHeader()}
  );
  }
}
  