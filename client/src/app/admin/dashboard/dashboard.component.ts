import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    '../../../assets/css/animate.min.css',
    '../../../assets/css/light-bootstrap-dashboard.css',
    '../../../assets/css/demo.css'
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }  
  
}
