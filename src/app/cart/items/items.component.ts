import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { CartService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{

  books:Array<Book>=[];
  constructor(private cartService : CartService){


  }
  ngOnInit(): void {
    this.books=this.cartService.get();
  }
  removeItem(book: Book) {
    this.cartService.remove(book);
  }
}
