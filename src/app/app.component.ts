import { Component,  OnChanges,  OnInit } from '@angular/core';
import { CartService } from './services/cartservice.service';
import { AuthserviceService } from './services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-project';
  constructor(private cartService:CartService,private authService: AuthserviceService){
  }
  ngOnInit(): void {
  }
  isAuthenticated() {
    return this.authService.getLoggedinUser();
  }

  logout() {
    this.authService.logout();
  }
  oncart(){
    return this.cartService.get().length;
  }

}
