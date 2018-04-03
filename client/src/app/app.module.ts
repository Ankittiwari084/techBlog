import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatFormField, MatFormFieldModule, MatIconModule,MatInputModule, MatGridListModule,MatPaginatorModule, MatTableModule,MatDividerModule,MatProgressBarModule,MatSnackBarModule,MatSortModule,MatDialogModule, MatSlideToggleModule} from '@angular/material';
import {NotificationsModule, NotificationsService} from 'angular4-notify';

import 'hammerjs';



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
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { SettingsComponent } from './admin/settings/settings.component';
import { AddSettingsComponent } from './admin/settings/add-settings.component';
import { EditSettingComponent } from './admin/settings/edit-setting.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './admin/forgot-password/reset-password/reset-password.component';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AddCategoryDialog } from './admin/categories/categories.component';


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
    AdminTopComponent,
    SettingsComponent,
    AddSettingsComponent,
    EditSettingComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    CategoriesComponent,
    AddCategoryDialog
  ],
  entryComponents: [
    AddCategoryDialog
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule,
    MatMenuModule,
    MatToolbarModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSortModule,
    MatDialogModule,
    MatSlideToggleModule
  ],
  providers: [UserService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
