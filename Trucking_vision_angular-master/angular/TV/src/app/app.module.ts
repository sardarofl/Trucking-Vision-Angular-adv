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
import { LoginComponent } from './components/login/login.component';

import { GetdataService } from './services/getdata.service';
import { DeletedataService } from './services/deletedata.service';
import { AdddataService } from './services/adddata.service';
import { SetdataService } from './services/setdata.service';
import { AuthenticationService } from './services/authentication.service';

import { MaterializeModule } from 'angular2-materialize';

import { FormsModule } from '@angular/forms';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import {AuthGuard} from './components/guards/auth.guard';

const appRoutes: Routes = [
    {path:'', component: CategoriesComponent, canActivate:[AuthGuard]},
  {path:'category', component: CategoriesComponent, canActivate:[AuthGuard]},
  {path:'products/:id/:category', component: ProductsComponent, canActivate:[AuthGuard]},
  {path:'gallery/:id/:product_name/:category', component: GalleryComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    FileSelectDirective,
    ProductsComponent,
    FooterComponent,
    GalleryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetdataService,DeletedataService,AdddataService,SetdataService,AuthenticationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}
