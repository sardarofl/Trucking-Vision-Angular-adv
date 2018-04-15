import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeletedataService {

  constructor(private http:Http) { }

  deleteCategory(id,category){
    return this.http.delete("http://localhost:3000/deletes/delete_category/"+id+"/"+category)
    .map(res => res.json());
  }

  deleteProduct(id,category){
    return this.http.delete("http://localhost:3000/deletes/delete_product/"+id)
    .map(res => res.json());
  }

}
