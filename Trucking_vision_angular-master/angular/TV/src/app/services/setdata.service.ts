import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SetdataService {

  constructor(private http:Http) { }


  SetGalleryDescription(gallery_id:string,title:string,description:string){

    let _url:string = "http://localhost:3000/sets/set_desc_title/";
    const data = '{"id": "' + gallery_id + '","title": "' + title + '", "description": "' + description + '"}';
    console.log(data);

    return this.http.post(_url,JSON.parse(data))
    .catch(this._errorHandler);

  }

  nonono(formdata:any){
     let _url:string = "http://localhost:3000/adds/add_category";
     return this.http.post(_url,formdata)
     .catch(this._errorHandler);
   }

  _errorHandler(error: Response){
    console.error('Error occured: ' +error);
    return Observable.throw(error||'some error on server occured');
  }

}
