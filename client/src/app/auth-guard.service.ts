import { CanActivate, 
        ActivatedRoute,
        ActivatedRouteSnapshot,
        RouterStateSnapshot,
        Router,
        CanActivateChild,
        CanDeactivate
        }
    from '@angular/router';
import { Injectable }     from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

    constructor(private authService:AuthService,private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean
    {
        return this.authService.isAuthenticated()
        .then(
            (authentication: boolean)=>{
                console.log("authentication",authentication);
                if(authentication){
                    return true;
                }else{
                    this.router.navigate(['admin'])
                }
            }
        )
    }
    canActivateChild(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean
    {
        return this.canActivate(route,state);
    }
    // canDeactivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean
    // {
    //     return this.authService.isAuthenticated()
    //     .then(
    //         (authentication: boolean)=>{
    //             console.log("authentication",authentication);
    //             if(authentication === false){
    //                 return true;
    //             }else{
    //                 this.router.navigate(['admin/dashboard'])
    //             }
    //         }
    //     )
    // }
}