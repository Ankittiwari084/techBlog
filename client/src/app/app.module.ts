import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminTopComponent } from './admin/admin-top/admin-top.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AdminComponent,
    FooterComponent,
    NavigationComponent,
    SliderComponent,
    DashboardComponent,
    SidebarComponent,
    AdminTopComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule
    
  ],
  providers: [UserService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
