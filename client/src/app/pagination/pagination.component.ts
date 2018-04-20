import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() paginationArray:any;
  @Input() moduleName:string;
  
  @Output() dataEvent = new EventEmitter();
  constructor(private userService:UserService) { }

  ngOnInit() {
  }


  /**
   * this function help to pagination
   * @param page_number 
   */
  pagination(page_number){
    this.userService.getPaginationData(page_number,this.moduleName).subscribe(
      (response)=>{
        this.dataEvent.emit(response.json().data);
      },
      (error)=>{
        
      });
  }

  
}
