import { Injectable } from '@angular/core';
import { UserLogin } from '../models/login';

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

  constructor() { }
  addUser(user:UserLogin){
    this.users.push(user);
  }
  autheticateUser(user:UserLogin){
    if(this.users.filter((data) => data.username != user.username && data.password != user.password)){
      return this.isloggedin
    }
    this.users.filter(data => data.username == user.username)[0].isactive=true;
    return !this.isloggedin
  }

  getLoggedinUser(){
    this.users.filter((data) => data.isactive);
  }
  logout(){
    this.users.filter(data => data.isactive)[0].isactive=false;
  }
  getusers(){
    return this.users;
  }
}
