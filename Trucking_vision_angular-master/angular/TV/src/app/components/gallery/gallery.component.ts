
import { Component, OnInit, ElementRef } from '@angular/core';

import {AdddataService} from '../../services/adddata.service';
import {GetdataService} from '../../services/getdata.service';
import {DeletedataService} from '../../services/deletedata.service';
import {SetdataService} from '../../services/setdata.service';

import {RouterModule,ActivatedRoute, Routes} from '@angular/router';

import {Http, Response, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public gallery:Gallery[];
  filesToUpload: Array<File> = [];
  public id_url:string;
  public product_url:string;
    public submitted:boolean;

  constructor(private getdataService:GetdataService, private deletedataService:DeletedataService, private setdataService:SetdataService,private route: ActivatedRoute, private adddataService:AdddataService, private http:Http, private elem: ElementRef) {
    setInterval(() => {

  }, 10000);
  }

  ngOnInit() {

    this.id_url = this.route.snapshot.paramMap.get('id');
    this.product_url = this.route.snapshot.paramMap.get('product_name');
    console.log(this.product_url);
    this.submitted=false;

////////refresh gallery /////////////
this.getdataService.getGallery(this.id_url).subscribe((gallery) => {
  this.gallery=  gallery;
},
err=>{
console.log(err);
return false;
});
//////////end refresh gallery.////////

  }

  deleteGalleryItem = function(deletedGalleryID) {

         this.submitted=true;
       this.deletedataService.deleteGalleryItem(deletedGalleryID).subscribe((res:Response)=>{
        console.log(res);
              this.submitted=false;
              ////////refresh gallery /////////////
              this.getdataService.getGallery(this.id_url).subscribe((gallery) => {
                this.gallery=  gallery;
                this.submitted=false;
              },
            err=>{
              console.log(err);
              return false;
            });
            //////////end refresh gallery.////////
       });

    }

    SetGalleryDescription = function(SetGallery_ID,Title,Description) {

           this.submitted=true;
           //console.log(SetGallery_ID + Description);
           this.setdataService.SetGalleryDescription(SetGallery_ID,Title,Description).subscribe((res:Response)=>{
            console.log(res);

                  this.submitted=false;
                  ////////refresh gallery /////////////
                  this.getdataService.getGallery(this.id_url).subscribe((gallery) => {
                    this.gallery=  gallery;
                    this.submitted=false;
                  },
                err=>{
                  console.log(err);
                  return false;
                });
                //////////end refresh gallery.////////
           });
      }

        public addGallery(): void{

          let files = this.elem.nativeElement.querySelector('#image').files;
          //let catnames = this.elem.nativeElement.querySelector('#name').value;
          let formData = new FormData();

          for(let i =0; i < files.length; i++){
                formData.append('image',files[i],files[i].name);
                console.log("appended "+files[i].name);
          }
        //  formData.append('image[]',files[0],files[0].name);
          //formData.append('image[]',files[1],files[1].name);

        //  let file = files[0];
        //  let catname = catnames[0];
          //formData.append('image',files);
          formData.append('id',this.id_url );
          this.submitted=true;
          var json_arr = JSON.stringify(formData);
        console.log("JSON: "+json_arr);
          this.adddataService.addGallery(formData).subscribe
          (res =>{ alert("Images uploaded to "+this.id_url+" is now added." );
          this.submitted=false;
          ////////refresh gallery /////////////
          this.getdataService.getGallery(this.id_url).subscribe((gallery) => {
            this.gallery=  gallery;
          },
        err=>{
          console.log(err);
          return false;
        });
        //////////end refresh gallery.////////

        } );

        }


}

interface Gallery{
  id:number,
  href:string,
  src:string,
  type:string,
  title:string,
  description:string
}
