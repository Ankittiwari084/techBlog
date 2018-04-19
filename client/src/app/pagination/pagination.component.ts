import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() paginationArray:any;
  @Output() dataEvent = new EventEmitter();
  constructor(private userService:UserService) { }

  ngOnInit() {
  }


  pagination(page_number){
    this.userService.getSetting(page_number).subscribe(
      (response)=>{
        this.dataEvent.emit(response.json().data);
      },
      (error)=>{
        
      });
  }

  
}
