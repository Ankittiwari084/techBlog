import { Routes , RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { NgModule, Component } from '@angular/core';
import { AuthGuard } from './auth-guard.service';

const appRoutes:  Routes = [
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register/:id/:name', component:RegisterComponent},
    {path:'admin',  component:AdminComponent},
    {path:'admin/dashboard',canActivate:[AuthGuard],component: DashboardComponent},
    
    { path: '**', component: HomeComponent },
];

@NgModule({
    
    imports:[ 
        RouterModule.forRoot(appRoutes,{enableTracing:false}),
     ],
    exports: [ RouterModule ],
    providers: [],
})
export class AppRoutingModule {

}