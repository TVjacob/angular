import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService :BookserviceService){

  }

  books:Array<Book>=[];



  ngOnInit(): void {
    this.books=this.bookService.getBooks();

  }
  removeItem(book: Book) {
    this.bookService.removeToCart(book);
  }
  addtoCart(book: Book) {
    this.bookService.addToCart(book);
  }

}
