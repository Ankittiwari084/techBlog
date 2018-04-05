import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSort, MatSortable, MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup,FormControl, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from '../../models/categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: [
    '../../../assets/css/light-bootstrap-dashboard.css',
    '../../../assets/css/pe-icon-7-stroke.css',
    '../../../assets/css/bootstrap.min.css'

  ]
})

export class CategoriesComponent implements OnInit {
  serverResponse:boolean = true;
  @ViewChild(MatSort) sort:MatSort;
  dataSource = new MatTableDataSource<Categories>();
  displayedColumns = ['name','is_publish','_id'];
  constructor(public userService:UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.serverResponse = false;
    this.getCategories();
  }

  getCategories(){
    this.userService.getCategories().subscribe(
      (response)=>{
        this.serverResponse = true;
        if(response.json().data != null){
          
          this.dataSource = response.json().data;
          console.log("this",this.dataSource);
          
        }else{
        //this.dataSource = name:'No Record Found',is_publish:0,_id:0};
        }
        this.dataSource.sort = this.sort;
      },
      (error)=>{
        this.userService.openSnackBar('Server Problem','');
      }
    )
  }
  openDialog(){
    this.dialog.open(AddCategoryDialog)
  }

  deleteSetting(id){
    this.userService.deleteCategory(id).subscribe(
      (response)=>{
        this.serverResponse = true;
        this.userService.openSnackBar('Category Delete successfully','');
        this.getCategories();
      },
      (error)=>{
        this.userService.openSnackBar('Data not delete may be server problem','');
      });    
  }

  addCategory(fromValue,dialogRef){
    this.userService.addCategory(fromValue).subscribe(
      (response)=>{
        this.getCategories();        
        this.userService.openSnackBar(response.json().message,'');
        dialogRef.close();
       
      },
      (error)=>{
        this.userService.openSnackBar('Category not added may be server problem','');
        dialogRef.close();
        
      }
    )
  }

}



@Component({
  selector:'category-add',
  templateUrl:'./add_categories.html',
  providers:[CategoriesComponent]
})
export class AddCategoryDialog implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private userService: UserService,
  private dialogRef:MatDialogRef<AddCategoryDialog>,
  private category:CategoriesComponent
  ) {}

  @ViewChild(MatSort) sortt:MatSort;
  dataSource = new MatTableDataSource<Categories>();
  displayedColumns = ['name','is_publish','_id'];



  addCategoryForm:FormGroup;
  ngOnInit(){
    this.addCategoryForm = new FormGroup({
      name: new FormControl('',Validators.required),
      is_publish: new FormControl(true,Validators.required)
    })
    this.category.getCategories();
  }

  onSubmit(){
    this.category.addCategory(this.addCategoryForm.value,this.dialogRef);
  }

  checkExist(value:string){
    return true;
  } 
  

}
