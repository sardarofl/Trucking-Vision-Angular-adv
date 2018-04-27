import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user= {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data =>{
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
    //    this.flashMessage.show('you are now logged in',{cssClass:'alert-success', timeout:5000});
        this.router.navigate(['category']);
      }else{
    //    this.flashMessage.show(data.msg,{cssClass:'alert-danger', timeout:5000});
        this.router.navigate(['login']);
        alert("Wrong Username or Password");
      }
    });
  }




}
