import { Component, OnInit, ViewChild, Inject, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSort, MatSortable, MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup,FormControl, Validator, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(public userService:UserService,
   public dialog: MatDialog,
   private route:ActivatedRoute,
  public changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.serverResponse = false;
    this.getCategories();
  }

  // get all category data
  getCategories(id = ''){
    this.userService.getCategories(id,'_id').subscribe(
      (response)=>{
        this.serverResponse = true;
        if(response.json().data != null){
          // assign response for all category in datasource.
          this.dataSource = response.json().data;
          
        }else{
        //this.dataSource = name:'No Record Found',is_publish:0,_id:0};
        }
        this.dataSource.sort = this.sort;
        this.changeDetectorRefs.detectChanges();
      },
      (error)=>{
        this.userService.openSnackBar('Server Problem','');
      }
    )
  }
  /*
  Name: openDialog
  Description: This funciton open popup for add form and send request to server for adding category.
  Param:Id
  */

  openDialog(){
    this.dialog.open(AddCategoryDialog,{
      data:{
        id:null,
        action:'add'
      }
    }).afterClosed().subscribe(
      result=>{
        this.getCategories();
      }
    )
  }

  /*
  Name: editOpenDialog
  Description: This funciton open popup for edit form and send request to server for updating category.
  Param:Id
  */
  editOpenDailog(id){
   var singleCategoryData = '';
    // call api for getting single category
    this.userService.getCategories(id,'_id').subscribe(
      (response)=>{
        if(response.json().data.length){
          singleCategoryData = response.json().data[0];

          // call funciton for open dialog box
            this.dialog.open(AddCategoryDialog,{
              data:{
                id:id,
                action:'edit',
                categoryData:singleCategoryData
              }
            }).afterClosed().subscribe(
              result=>{
                this.getCategories();
              }
            )

        }
      },
      (error)=>{
        this.userService.openSnackBar('Server Problem','');
      }
    )

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


  addCategory(fromValue,dialogRef,id=null){
    
    if(id != null){
      // edit category.
      this.userService.editCategory(fromValue,id).subscribe(
        (response)=>{
          this.getCategories();        
          this.userService.openSnackBar(response.json().message,'');
          dialogRef.close();
         
        },
        (error)=>{
          this.userService.openSnackBar('Category not updated may be server problem','');
          dialogRef.close();
          
        }
      )
    }else{
      // add category.
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

  public name:string = '';
  public is_publish:boolean = true;




  addCategoryForm:FormGroup;
  ngOnInit(){
    // check if edit action 
    if(this.data.action == 'edit'){
      this.name = this.data.categoryData.name;
      this.is_publish = this.data.categoryData.is_publish;
    }

    this.addCategoryForm = new FormGroup({
      name: new FormControl(this.name,Validators.required),
      is_publish: new FormControl(this.is_publish,Validators.required)
    })
  }

  onSubmit(){
    var id = this.data.id;
    if(id){
      this.category.addCategory(this.addCategoryForm.value,this.dialogRef,id);
    }else{
      this.category.addCategory(this.addCategoryForm.value,this.dialogRef,id);
    }
    
  }
  /*
  Name: checkExist
  Description:check existing category.
  Params: value(name, title etc)
  */

  checkExist(value:string){
    console.log(this.addCategoryForm.controls['name'])
    this.userService.getCategories(value,'name').subscribe(
      (response)=>{
        if(response.json().data.length > 0){
          
            //this.addCategoryForm.get('name').setErrors({name_errors:true})
          
         
        }
      },
      (error)=>{
        this.userService.openSnackBar('Server problem','');        
      }
    )
  } 
  

}
