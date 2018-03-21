import { resolve } from "url";
import { reject } from "q";
import { promise } from "protractor";
import { truncate } from "fs";

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
    // this function for logout.
    logout(){       
        localStorage.removeItem('userData');
        
        return true;
            
    }
}