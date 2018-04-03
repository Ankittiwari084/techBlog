import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSort, MatSortable, MatTableDataSource, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup,FormControl, Validator, Validators} from '@angular/forms';

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
  dataSource;
  displayedColumns = ['name','is_publish'];
  constructor(public userService:UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.serverResponse = false;
    this.userService.getCategories().subscribe(
      (response)=>{
        this.serverResponse = true;
        if(response.json().data != null){
          this.dataSource = new MatTableDataSource(response.json().data);
          
        }else{
        this.dataSource = new MatTableDataSource([{name:'No Record Found'}]);
        }
        this.dataSource.sort = this.sort;
      },
      (error)=>{
        this.userService.openSnackBar('Server Problem','');
      }
    )
  }

  openDialog(){
    this.dialog.open(AddCategoryDialog,{
      data:{
        animal:'panda'
      }
    })
  }

}

@Component({
  selector:'category-add',
  templateUrl:'./add_categories.html',

})
export class AddCategoryDialog implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  addCategoryForm:FormGroup;
  ngOnInit(){
    this.addCategoryForm = new FormGroup({
      name: new FormControl('',Validators.required),
      is_publish: new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    console.log(this.addCategoryForm.value);
  }

  checkExist(value:string){
    return false;
  }

}
