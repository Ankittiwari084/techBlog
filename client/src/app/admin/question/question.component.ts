import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { UserService } from '../../services/user.service';
import { MatDialog, MAT_DIALOG_DATA,MatSelectModule } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: [
    '../../../assets/css/light-bootstrap-dashboard.css',
    '../../../assets/css/pe-icon-7-stroke.css',
    '../../../assets/css/bootstrap.min.css'

  ],
  providers:[QuestionService]
})
export class QuestionComponent implements OnInit {

  constructor(private userService:UserService,private questionService:QuestionService,private router:Router) { }

  serverResponse:boolean = true;
  dataSource:Question;
  displayedColumns = ['title','option_one_value','option_two_value','option_three_value','option_four_value','correct_option','_id'];
  answer_value:string;

  ngOnInit() {
    this.getQuestion();
  }
  objIndex:any;
  getQuestion(id=''){
    this.serverResponse = false;
    this.questionService.getQuestions(id,'_id').subscribe(
      (response)=>{
        // assign response array in new variable.
        let myArray = response.json().data;
        this.serverResponse = true;
        for(var i = 0; i< myArray.length; i++ ){
          
          this.answer_value = myArray[i].correct_option;

          this.objIndex = myArray.findIndex((obj => obj._id == myArray[i]._id));

          myArray[this.objIndex].correct_option = myArray[i][this.answer_value];
          
        }
        this.dataSource = myArray;
      },
      (error)=>{
        this.serverResponse = true
      }
    )
  }
}