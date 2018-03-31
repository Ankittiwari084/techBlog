import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { Setting } from '../../models/setting.model'; 
import {MatPaginator, MatTableDataSource, MatSnackBar} from '@angular/material';
import { settings } from 'cluster';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: [
    '../../../assets/css/light-bootstrap-dashboard.css',
    '../../../assets/css/pe-icon-7-stroke.css',
    '../../../assets/css/bootstrap.min.css'

  ]
})
export class SettingsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public userService:UserService,public router:Router,public route:ActivatedRoute,public snackBar:MatSnackBar) { 

  }

  serverResponse:boolean = false
  dataSource:Setting[];
  public errormessage:string;
  public successmessage:string;
  displayedColumns = ["setting_label","createdAt","updatedAt","_id"];
  ngOnInit() {
    this.serverResponse = false;
    this.userService.getSetting().subscribe(
      (response)=>{
        this.serverResponse = true;
        this.dataSource = response.json().data;  
      },
      (error)=>{
        
      });
  }

  getDataFromApi(){
    this.serverResponse = false;
    this.userService.getSetting().subscribe(
      (response)=>{
        this.serverResponse = true;
        this.dataSource = response.json().data;  
      },
      (error)=>{
        
      });
  }

  deleteSetting(id){
    this.serverResponse = false;
    this.userService.deleteSetting(id).subscribe(
      (response)=>{
        this.serverResponse = true;
        this.userService.openSnackBar('Setting Delete successfully','');
        this.getDataFromApi();
      },
      (error)=>{
        this.errormessage = "Data not delete may be server problem"
      });
  }
}  

  

