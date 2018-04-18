import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdddataService {

  constructor(private http:Http) { }

/*  addCategory(id,category){
    return this.http.delete("http://localhost:3000/deletes/delete_category/"+id+"/"+category)
    .map(res => res.json());
  }*/
  addCategory(formdata:any){
     let _url:string = "http://localhost:3000/adds/add_category";
     return this.http.post(_url,formdata)
     .catch(this._errorHandler);
   }

   addProduct(formdata:any){
      let _url:string = "http://localhost:3000/adds/add_product";
      return this.http.post(_url,formdata)
      .catch(this._errorHandler);
    }

    addGallery(formdata:any){
       let _url:string = "http://localhost:3000/adds/add_gallery";
       return this.http.post(_url,formdata)
       .catch(this._errorHandler);
     }

   _errorHandler(error: Response){
     console.error('Error occured: ' +error);
     return Observable.throw(error||'some error on server occured');
   }
}
