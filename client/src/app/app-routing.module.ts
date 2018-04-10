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
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './admin/forgot-password/reset-password/reset-password.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { NgModule, Component } from '@angular/core';
import { AuthGuard } from './auth-guard.service';
import { SettingsComponent } from './admin/settings/settings.component';
import { AddSettingsComponent } from './admin/settings/add-settings.component';
import { EditSettingComponent } from './admin/settings/edit-setting.component';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { QuestionComponent } from './admin/question/question.component';


const appRoutes:  Routes = [
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'admin/forgot_password', component:ForgotPasswordComponent},
    {path:'admin/forgot_password/:token', component:ResetPasswordComponent},
    
    {path:'register/:id/:name', component:RegisterComponent},
    {path:'admin',  component:AdminComponent},
    {path:'admin/dashboard',canActivate:[AuthGuard],component: DashboardComponent},
    {path:'admin/setting',canActivate:[AuthGuard],component: SettingsComponent},
    {path:'admin/add-setting',canActivate:[AuthGuard],component: AddSettingsComponent},
    {path:'admin/edit-setting/:id',canActivate:[AuthGuard],component: EditSettingComponent},
    {path:'admin/change_password',canActivate:[AuthGuard],component:ChangePasswordComponent},     
    
    // category path.

    {path:'admin/categories',canActivate:[AuthGuard],component:CategoriesComponent},     
    {path:'admin/questions',canActivate:[AuthGuard],component:QuestionComponent},     
    
    
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