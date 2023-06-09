import { Injectable } from '@angular/core';
import { LoginForm, UserLogin } from '../models/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  isloggedin:boolean=false;
  users:Array<UserLogin>=[
    {
      id:1,
      username:"user1",
      password:"user1",
      img_src:"",
      isadmin:false,
      isactive:false,
    },
    {
      id:2,
      username:"admin",
      password:"admin",
      img_src:"",
      isadmin:true,
      isactive:false,
    },
    {
      id:3,
      username:"test",
      password:"test",
      img_src:"",
      isadmin:false,
      isactive:false,
    },
    {
      id:4,
      username:"grace",
      password:"grace",
      img_src:"",
      isadmin:false,
      isactive:false,
    },
  ]

  constructor(private router: Router) { }
  addUser(user:UserLogin){
    this.users.push(user);
  }
  autheticateUser(form:LoginForm){
    if (this.users.filter((data) => data.username === form.username && data.password === form.password).length > 0) {
      this.users.filter((data) => data.username === form.username && data.password === form.password)[0].isactive=true;
     if(this.users.filter((data) => data.username === form.username && data.password === form.password && data.isadmin===true).length>0){
      this.router.navigate(['admin'])
      return true;
     }
      this.router.navigate(['cart'])
      return true;
    }
    return false;
  }

  getLoggedinUser(){
    if(this.users.filter((data) => data.isactive).length>0){
      return true;
    }
    return false;
  }
  logout(){
    this.users.filter(data => data.isactive ===true)[0].isactive=false;
    this.router.navigate(['login'])
  }
  getusers(){
    return this.users;
  }
  removeUser(user :UserLogin){
    this.users.filter(data => data.id === user.id);
  }
}
