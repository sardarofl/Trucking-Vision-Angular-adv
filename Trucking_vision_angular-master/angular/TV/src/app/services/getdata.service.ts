import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetdataService {


  constructor(private http:Http){  }

    getCategory(){
      return this.http.get('http://localhost:3000/fetchs/fetch_categories')
      .map(res => res.json());
    }

    getProduct(category:string){
      return this.http.get('http://localhost:3000/fetchs/fetch_products/'+category)
      .map(res => res.json());
    }

}
