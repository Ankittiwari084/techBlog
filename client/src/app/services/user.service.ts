import { Injectable } from '@angular/core';
import { Http, Headers,  } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { paginationEnvironment } from '../../environments/environment';

import {RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Setting } from '../models/setting.model';
import { Categories } from '../models/categories.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UserService {
  

  constructor(private http:Http,public routePath:ActivatedRoute,public snackBar: MatSnackBar) {}
  
  errorHandle(message,error){
    if(error.status == 403){
      this.openSnackBar('Token is missing for this user','Please login');
      return false;
    }
    this.openSnackBar(message,'');

  }

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

  getSetting(page_num = '',order,field_name){
    return this.http.get(environment.apiUrl+'admin/get_setting/'+page_num+'?order='+order+'&field='+field_name,{headers:this.getHeader()});
  }

  countService(){
    return this.http.get(environment.apiUrl+'admin/count_setting',{headers:this.getHeader()});
    
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
    return  this.http.get(environment.apiUrl+'admin/get_single_setting/'+id,{headers:this.getHeader()});
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
  /**
   * 
   * @param value ( value for where condition )
   * @param key (key for value like id = 1 )
   * @param page_num ( this meanse number of page like 0 or 1)
   * @param order (asc, desc)
   * @param field_name ( like title = asc or like title = desc)
   */
  getCategories(value:string = '',key:string,page_num = 0,order = 1,field_name = '' ){
    if(value && key){
      return this.http.get(environment.apiUrl+'admin/get_single_categories?'+key+'='+value,{
        headers:this.getHeader()
      });
    }else{
      console.log(page_num);
      return this.http.get(environment.apiUrl+'admin/get_categories/'+page_num+'?order='+order+'&field='+field_name,{
        headers:this.getHeader()
      });
    }
    
  }

  addCategory(value){
    return this.http.post(environment.apiUrl+'admin/add_category',value,{
      headers:this.getHeader()
    })
  }

  editCategory(value,id){
    return this.http.put(environment.apiUrl+'admin/edit_category/'+id,value,{
      headers:this.getHeader()
    })
  }

  deleteCategory(id){
    return this.http.get(environment.apiUrl+'admin/delete_category/'+id,
    {headers:this.getHeader()}
  );
  }

  getPaginationData(page_num = '',moduleName = ''){
    return this.http.get(environment.apiUrl+paginationEnvironment[moduleName]+page_num,{headers:this.getHeader()});
  }

  makeArrayForPagination(total_number,pageCount){
    pageCount.length = 0;
    var links = Math.ceil(total_number/10);
    for(var i = 1; i<= links; i++ ){
      pageCount.push(i);
    }
    return pageCount;
  }

}
  