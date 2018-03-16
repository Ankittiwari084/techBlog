import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable()
export class UserService {
  

  constructor(private http:Http) {}
  loginServices(userData){
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://localhost:3000/admin/login/',userData,
    {headers:headers}
  );
  }
}
