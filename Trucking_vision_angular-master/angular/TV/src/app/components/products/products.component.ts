import { Component,OnInit, ElementRef} from '@angular/core';

import {GetdataService} from '../../services/getdata.service';
import {DeletedataService} from '../../services/deletedata.service';
import {AdddataService} from '../../services/adddata.service';
import {SetdataService} from '../../services/setdata.service';


import {RouterModule,ActivatedRoute, Routes} from '@angular/router';

import {Http, Response, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    public product:Product[];
    public category_url:string;
    public submitted:false;
    deletedProdID:string;
    deletedProdProduct:string;
  //  id_url:string;

  constructor(private route: ActivatedRoute, private getdataService:GetdataService, private setdataService:SetdataService, private deletedataService:DeletedataService, private adddataService:AdddataService, private http:Http, private elem: ElementRef) {
    setInterval(() => {
      this.getdataService.getProduct(this.category_url).subscribe((product) => {
        this.product=  product;
      },
    err=>{
      console.log(err);
      return false;
    });
  }, 10000);
}

  ngOnInit() {

    //get parameters
  //  console.log("hey this is me yo"+this.route.snapshot.paramMap.get('category'));
    this.category_url = this.route.snapshot.paramMap.get('category');
  //  this.id_url = = this.route.snapshot.paramMap.get('id');
    ////////refresh category /////////////
    this.getdataService.getProduct(this.category_url).subscribe((product) => {
      this.product=  product;
    },
  err=>{
    console.log(err);
    return false;
  });
  //////////end refresh category.////////
  }


      deleteProduct = function(deletedProdID,deletedProdProduct) {
         if(confirm('Are you sure to delete "'+deletedProdProduct+'" product? All dependencies will be deleted.')) {
             this.submitted=true;
           this.deletedataService.deleteProduct(deletedProdID,deletedProdProduct).subscribe((res:Response)=>{
            console.log(res);
                  this.submitted=false;
                  ////////refresh category /////////////
                  this.getdataService.getProduct(this.category_url).subscribe((product) => {
                    this.product=  product;
                  },
                err=>{
                  console.log(err);
                  return false;
                });
                //////////end refresh category.////////
           });
         }
        }


              public addProduct(): void{

                let files = this.elem.nativeElement.querySelector('#image').files;
                let prodnames = this.elem.nativeElement.querySelector('#name').value;
                let formData = new FormData();

                let file = files[0];
                formData.append('image',file,file.name);
                formData.append('product',prodnames);
                formData.append('category',this.category_url);
                //this.submitted=true;

                this.adddataService.addProduct(formData).subscribe
                (res =>{ alert("product "+prodnames+" is now added.");

                ////////refresh category /////////////
                this.getdataService.getProduct(this.category_url).subscribe((product) => {
                  this.product=  product;
                },
              err=>{
                console.log(err);
                return false;
              });
              //////////end refresh category.////////

              } );

              }

}

interface Product{
  id:number,
  product_name:string,
  image:string,
  image_path:string
}
