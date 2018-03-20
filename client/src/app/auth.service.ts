import { resolve } from "url";
import { reject } from "q";
import { promise } from "protractor";

export class AuthService {
    loggedIn = false;
    user:any;
    token:string;
    isAuthenticated(){
        const promise = new Promise(
            (resolve,reject)=>{
                this.user = JSON.parse(localStorage.getItem('userData'));
                if(this.user == null){                    
                    this.loggedIn = false;
                    
                }else{
                    this.loggedIn = true;
                    
                }
                resolve(this.loggedIn);
                
            }
        );
        return promise;
    }   
    
    logout(){
        this.loggedIn = false;
    }
}