
import { Component, OnInit, ElementRef } from '@angular/core';
declare var jquery:any;
declare var $ :any;

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
  public video:Video[];
  filesToUpload: Array<File> = [];
  public id_url:string;
  public product_url:string;
  public submitted:boolean;
  public category_url:string;

  constructor(private getdataService:GetdataService, private deletedataService:DeletedataService, private setdataService:SetdataService,private route: ActivatedRoute, private adddataService:AdddataService, private http:Http, private elem: ElementRef) {
    setInterval(() => {

  }, 10000);
  }

  ngOnInit() {
    $(document).ready(function(){ $('ul.tabs').tabs(); });

    this.id_url = this.route.snapshot.paramMap.get('id');
    this.product_url = this.route.snapshot.paramMap.get('product_name');
    this.category_url = this.route.snapshot.paramMap.get('category');

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
////////refresh video /////////////
this.getdataService.getVideo(this.id_url).subscribe((video) => {
  this.video=  video;
},
err=>{
console.log(err);
return false;
});
//////////end refresh video.////////

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
            ////////refresh video /////////////
            this.getdataService.getVideo(this.id_url).subscribe((video) => {
              this.video= video;
              },
            err=>{
              console.log(err);
              return false;
            });
            //////////end refresh video.////////
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

      public addVideo(): void{
        let youtube_description = this.elem.nativeElement.querySelector('#youtube_description').value;
        let youtube_link = this.elem.nativeElement.querySelector('#youtube_link').value;
        const youtube_link_parsed = this.youtube_parser(youtube_link);
        let formData = new FormData();

        if(this.isYoutube(youtube_link)){
          formData.append('link',youtube_link_parsed);
          formData.append('desc',youtube_description);
          formData.append('id',this.id_url);

          this.submitted=true;
          //var json_arr = JSON.stringify(formData);

          this.adddataService.addVideo(formData).subscribe
          (res =>{ alert("Video is added to Gallery." );
          this.submitted=false;
          ////////refresh video /////////////
          this.getdataService.getVideo(this.id_url).subscribe((video) => {
            this.video= video;
          },
        err=>{
          console.log(err);
          return false;
        });
        //////////end refresh video.////////

        } );

      }else{
        alert("Please insert a valid youtube link");
      }

      }


      isYoutube = function isYoutube(getURL){
        var url = getURL;
      if (url != undefined || url != '') {
          var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
          var match = url.match(regExp);
          if (match && match[2].length == 11) {
              // Do anything for being valid
              // if need to change the url to embed url then use below line

              return true;


          } else {

              return false;
              // Do anything for not being valid
          }
      }
      }

      youtube_parser= function youtube_parser(url){
      //  console.log(url);
          var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
          var match = url.match(regExp);
          return (match&&match[7].length==11)? match[7] : false;
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
          (res =>{ alert("Images are uploaded to Gallery." );
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

interface Video{
  id:number,
  href:string,
  src:string,
  type:string,
  title:string,
  description:string
}
