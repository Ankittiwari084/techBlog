import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { UserService } from '../../services/user.service';
import { MatDialog, MAT_DIALOG_DATA,MatSelectModule } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor(private userService:UserService,private questionService:QuestionService,public dialog:MatDialog) { }

  serverResponse:boolean = true;
  dataSource:Question;
  displayedColumns = ['title','option_one_value','option_two_value','option_three_value','option_four_value','correct_option'];
  

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion(id=''){
    this.serverResponse = false;
    this.questionService.getQuestions(id,'_id').subscribe(
      (response)=>{
        this.serverResponse = true;
        this.dataSource = response.json().data;
      },
      (error)=>{
        this.serverResponse = true
      }
    )
  }

  openDialog(){
    this.dialog.open(
      AddQuestionDialog,{
        height: '660px',
        width: '800px',
        data:{
          id:null,
          action:'add',
        }
      }).afterClosed().subscribe(
        result=>{
          this.getQuestion();
        }
      )
  }
}


@Component({
  selector:'question-add',
  templateUrl:'./add_question.html',
  providers:[QuestionComponent]
})

export class AddQuestionDialog implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){

  }

  addQuestionForm:FormGroup;

  public title:string;
  public option_one_value:string;
  public option_two_value:string;
  public option_three_value:string;
  public option_four_value:string;
  public option_one_title:string = 'A';
  public option_two_title:string = 'B';
  public option_three_title:string = 'C';
  public option_four_title:string = 'D';
  public correct_option:string;
  selected = 'option2';

  ngOnInit(){
    this.addQuestionForm = new FormGroup({
      title: new FormControl(this.title,Validators.required),
      option_one_title: new FormControl(this.option_one_title,Validators.required),
      option_two_title: new FormControl(this.option_two_title,Validators.required),
      option_three_title: new FormControl(this.option_three_title,Validators.required),
      option_four_title: new FormControl(this.option_four_title,Validators.required),
      option_one_value: new FormControl(this.option_one_value,Validators.required),
      option_two_value: new FormControl(this.option_two_value,Validators.required),
      option_three_value: new FormControl(this.option_three_value,Validators.required),
      option_four_value: new FormControl(this.option_four_value,Validators.required),
      correct_option: new FormControl(this.correct_option,Validators.required)
    })
    
  }

  onSubmit(){
    console.log(this.addQuestionForm.value);
  }
}