import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-top',
  templateUrl: './admin-top.component.html',
  styleUrls: [   
    '../../../assets/css/light-bootstrap-dashboard.css',
    '../../../assets/css/bootstrap.min.css'
  ]
})
export class AdminTopComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  logout(){
    if(this.authService.logout() == true){
      this.router.navigate(['admin']);
    }
  }

}
