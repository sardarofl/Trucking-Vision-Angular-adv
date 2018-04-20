import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';

import { GetdataService } from './services/getdata.service';
import { DeletedataService } from './services/deletedata.service';
import { AdddataService } from './services/adddata.service';
import { SetdataService } from './services/setdata.service';

import { MaterializeModule } from 'angular2-materialize';

import { FormsModule } from '@angular/forms';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';


const appRoutes: Routes = [
  {path:'', component: CategoriesComponent},
  {path:'products/:id/:category', component: ProductsComponent},
  {path:'gallery/:id/:product_name', component: GalleryComponent},
  {path:'', redirectTo: '', pathMatch:'full'},
  {path:'**', component: CategoriesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    FileSelectDirective,
    ProductsComponent,
    FooterComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetdataService,DeletedataService,AdddataService,SetdataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
