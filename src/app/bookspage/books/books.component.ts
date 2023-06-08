import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Array<Book>=[];

  constructor(private bookService :BookserviceService){

  }

  ngOnInit(): void {
    this.books=this.bookService.getBooks();

  }

}
