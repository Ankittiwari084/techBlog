import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  

  constructor(private http:Http) {}
  loginServices(userData){
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post(environment.apiUrl+'admin/login/',userData,
    {headers:headers}
  );
  }
}
