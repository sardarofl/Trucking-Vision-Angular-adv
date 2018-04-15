import { Component } from '@angular/core';
import {GetdataService} from './services/getdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private newGetData: GetdataService){
  }

  ngOnInit(){
    this.newGetData.getCategory();
  }

}
