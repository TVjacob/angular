import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/models/login';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    username: '',
    password: '',
  };


  isLoading:boolean=false;
  constructor(private authService:AuthserviceService){

  }
  ngOnInit(): void {

  }
  login(){
    this.isLoading=true;
    this.isLoading= this.authService.autheticateUser(this.form);
  }


}
