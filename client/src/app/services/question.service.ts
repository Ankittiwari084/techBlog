import { Injectable } from '@angular/core';
import { Http,   } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import {RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class QuestionService {

  constructor(public userService:UserService,private http:Http) { }

  getQuestions(value:string,key:string){
    return this.http.get(environment.apiUrl+'admin/get_question?'+key+'='+value,{
      headers:this.userService.getHeader()
    });
  }
  saveQuestion(formValue,id=''){
    if(id){
      return this.http.put(environment.apiUrl+'admin/edit_question/'+id,formValue,{
        headers:this.userService.getHeader()
      })
    }
    return this.http.post(environment.apiUrl+'admin/add_question',formValue,{
      headers:this.userService.getHeader()
    })
  }
}
