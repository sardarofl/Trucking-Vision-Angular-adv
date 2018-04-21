import { Component, OnInit, ElementRef } from '@angular/core';
declare var jquery:any;
declare var $ :any;

import {GetdataService} from '../../services/getdata.service';
import {DeletedataService} from '../../services/deletedata.service';
import {AdddataService} from '../../services/adddata.service';

import {Http, Response, Headers} from '@angular/http';



import 'rxjs/add/operator/map';

import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category:Category[];
  title:string;
  deletedCatID:string;
  deletedCatCategory:string;
  editedCategory:string;
  months:string[];
  isavailable:boolean;
  categorydata:object;
  public submitted:false;


  constructor(private getdataService:GetdataService,  private deletedataService:DeletedataService, private adddataService:AdddataService, private http:Http, private elem: ElementRef) {
    setInterval(() => {
      this.getdataService.getCategory().subscribe((category) => {
        this.category=  category;
      },
    err=>{
      console.log(err);
      return false;
    });
  }, 10000);




  }

  ngOnInit() {
    $(document).ready(function(){ $('ul.tabs').tabs(); });

      ////////refresh category /////////////
      this.getdataService.getCategory().subscribe((category) => {
        this.category=  category;
      },
    err=>{
      console.log(err);
      return false;
    });
    //////////end refresh category.////////

  }




    deleteCategory = function(deletedCatID,deletedCatCategory) {
           if(confirm('Are you sure to delete category "'+deletedCatCategory+'"? All dependencies will be deleted.')) {
           this.submitted=true;
         this.deletedataService.deleteCategory(deletedCatID,deletedCatCategory).subscribe((res:Response)=>{
          console.log(res);
                this.submitted=false;
                 ////////refresh category /////////////
                 this.getdataService.getCategory().subscribe((category) => {
                   this.category=  category;
                 //  console.log(  this.category);
                 },
               err=>{
                 console.log(err);
                 return false;
               });
               //////////end refresh category.////////
         });
      }
    }



      public addCategory(): void{

        let files = this.elem.nativeElement.querySelector('#image').files;
        let catnames = this.elem.nativeElement.querySelector('#name').value;
        let formData = new FormData();

        let file = files[0];
        let catname = catnames[0];
        formData.append('image',file,file.name);
        formData.append('category',catnames);
      //  this.submitted=true;

        this.adddataService.addCategory(formData).subscribe
        (res =>{ alert("category "+catnames+" is now added.");

              ////////refresh category /////////////
              this.getdataService.getCategory().subscribe((category) => {
                this.category=  category;
                this.submitted=false;
              },
            err=>{
              console.log(err);
              return false;
            });
            //////////end refresh category.////////

      } );

      }




}

interface Category{
  id:number,
  category_name:string,
  image:string,
  image_path:string
}
