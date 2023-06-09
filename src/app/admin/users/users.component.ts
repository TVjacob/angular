import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/login';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  dataSource: UserLogin[] = [];
  displayedColumns: string[] = [
    'id',
    'username',
    'isadmin',
    'image',
    'delete',
  ];
  constructor(private authService:AuthserviceService){

  }
  ngOnInit(): void {
    this.dataSource=this.authService.getusers();
  }
  deleteuser(user: UserLogin) {
    this.authService.removeUser(user);
  }


}
