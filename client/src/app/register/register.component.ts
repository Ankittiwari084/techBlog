import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id'],this.route.snapshot.params['name']);
  }

}
