import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { UserService } from '../../services/user.service';
import { MatDialog, MAT_DIALOG_DATA,MatSelectModule } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionComponent } from './question.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector:'question-add',
    templateUrl:'./add_question.html',
    styleUrls: [
        '../../../assets/css/light-bootstrap-dashboard.css',
        '../../../assets/css/pe-icon-7-stroke.css',
        '../../../assets/css/bootstrap.min.css'
    
      ],
    providers:[QuestionComponent,QuestionService]
  })
  
  export class AddQuestionDialog implements OnInit{
    constructor(private questionService:QuestionService,private userService:UserService,private router:Router,private route:ActivatedRoute){

    }
  
    addQuestionForm:FormGroup;
    serverResponse:boolean = true;
    public id:string = this.route.snapshot.paramMap.get('id');
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
    
    selected = 'option_one_value';
    
    ngOnInit(){
        if(this.id != null){
            this.serverResponse = false;
            this.setFormValue(this.id);          
        }
        this.setFormField();
    }
    
    /**
     * name: onSubmit
     * Description: this funciton for save data.
     */

    onSubmit(){
        console.log(this.addQuestionForm.value);
        this.serverResponse = false;
        this.questionService.saveQuestion(this.addQuestionForm.value,this.id).subscribe(
            (response)=>{
                this.serverResponse = true;
                if(response){
                    this.userService.openSnackBar('Question Saved ','');
                    this.router.navigate(['/admin/questions']);
                }
            },
            (error)=>{
                this.serverResponse = true;
                this.userService.errorHandle('Question could not be saved may be server problem',error);            
            }
        )
    }
    /**
     * name: setFormField
     * Description: this funciton set all field.
     */
    setFormField(){
        return  this.addQuestionForm = new FormGroup({
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
    /**
     * name: setFormValue
     * Description: this funciton set all form value which is come from API.
     */
    setFormValue(id){
        if(id != null){
            this.questionService.getQuestions(id,'_id').subscribe(
                (response)=>{
                    console.log("response",response);
                    console.log(response.json().data[0]);
                    this.title = response.json().data[0].title;
                    this.id = response.json().data[0]._id;
                    this.option_one_value= response.json().data[0].option_one_value;
                    this.option_two_value= response.json().data[0].option_two_value;
                    this.option_three_value= response.json().data[0].option_three_value;
                    this.option_four_value= response.json().data[0].option_four_value;
                    this.option_one_title= response.json().data[0].option_one_title;
                    this.option_two_title= response.json().data[0].option_two_title;
                    this.option_three_title= response.json().data[0].option_three_title;
                    this.option_four_title= response.json().data[0].option_four_title;
                    
                    this.correct_option= response.json().data[0].correct_option;
                    this.selected= response.json().data[0].correct_option;
                    // call set form field again
                    this.setFormField();
                },
                (error)=>{
                    this.userService.errorHandle('Server problem',error); 
                }
            )
             
        }
    }
  }