import { Component, OnInit, ViewChild, Input } from '@angular/core';
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


  constructor(public userService:UserService,public router:Router,public route:ActivatedRoute,public snackBar:MatSnackBar) { 

  }

  serverResponse:boolean = false
  dataSource:Setting[];
  public errormessage:string;
  public successmessage:string;
  public pageCount:number[] = [];
  public module_name:string;
  public order:number;
  public field_name:string;
  public total_number:number;
  displayedColumns = ["setting_label","createdAt","updatedAt","_id"];
  
  ngOnInit() {
    // set by default value.
    this.module_name = 'setting';
    this.order = 1;
    this.field_name = 'setting_label'; // by default sort by title field 
    this.serverResponse = false;
    this.getDataFromApi('0',this.order,this.field_name);
  }

  countSetting(){
    this.userService.countService().subscribe(
      (Response)=>{
        
        this.total_number = Response.json().data;
        this.userService.makeArrayForPagination(this.total_number,this.pageCount);
      },
      (error)=>{

      }
    )
  }
  /**
   * 
   * @param page_num (page number for pagination)
   * @param order (order for ase or desc)
   */
  getDataFromApi(page_num = '0',order,field_name){
    this.serverResponse = false;
    this.userService.getSetting(page_num,order,field_name).subscribe(
      (response)=>{
        // change value positive to nigativ
        this.order = (this.order) * (-1);
        this.countSetting();
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
        this.getDataFromApi('0',this.order,this.field_name);
      },
      (error)=>{
        this.errormessage = "Data not delete may be server problem"
      });
  }


  /**
   * Desc: this function help to recive emit event.
   */
  receiveMessage($event) {
    this.dataSource = $event
  }

  // set sort by default.
  

  /**
   * Name:sort
   */
  sort($event){
     this.getDataFromApi('0',this.order,$event);
  }
}  

  

